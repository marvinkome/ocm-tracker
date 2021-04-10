import { getUser, requestToken } from "lib/discord"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { code, token } = req.body

    try {
        const resp = await requestToken({ code, token })
        const userDetails = await getUser(resp.access_token)

        return res.send({
            refreshToken: resp.refresh_token,
            username: userDetails.username,
        })
    } catch (err) {
        console.error(err.message)
        return res.status(500).send({ message: err.message })
    }
}
