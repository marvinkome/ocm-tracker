import { getUser, requestToken } from "lib/discord"
import { getManagerClub } from "lib/firebase"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { code, token, competition } = req.body

    try {
        const resp = await requestToken({ code, token })
        const { username } = await getUser(resp.access_token)
        const club = await getManagerClub(username, competition)

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
