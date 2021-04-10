import { NextApiRequest, NextApiResponse } from "next"
import { getManagerClub } from "lib/sheets"
import config from "config"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(404).send({ message: "Page not found" })
    }

    const { managerName } = req.query
    try {
        const club = await getManagerClub(
            config.leagues.championship.sheetsInfo,
            managerName as string
        )
        return res.status(200).send({ payload: (club as string)?.toLowerCase() })
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
}
