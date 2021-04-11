import { getUser, requestToken } from "services/discord"
import { getManagerClub } from "services/firebase"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { league } = req.query
    const { code, token } = req.body

    try {
        const resp = await requestToken({ code, token })
        const { username } = await getUser(resp.access_token)
        const club = await getManagerClub(username, league as string)

        return res.send({
            refreshToken: resp.refresh_token,
            username,
            club,
        })
    } catch (err) {
        console.error(err.message)
        return res.status(500).send({ message: err.message })
    }
}
