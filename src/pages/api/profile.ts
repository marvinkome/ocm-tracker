import { NextApiRequest, NextApiResponse } from "next"
import { getManagerClub } from "lib/firebase"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { managerName, competition } = req.query

    try {
        const club = await getManagerClub(`${managerName}`, `${competition}`)

        return res.status(200).send({
            payload: {
                club,
            },
        })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}
