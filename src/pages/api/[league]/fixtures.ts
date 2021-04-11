import { NextApiRequest, NextApiResponse } from "next"
import { getFixtures } from "services/firebase"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { league } = req.query

    try {
        const fixtures = await getFixtures("MID", league as string)

        return res.status(200).send({
            payload: { fixtures },
        })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}
