import config from "config"
import { GoogleSpreadsheet } from "google-spreadsheet"

async function loadSheet(sheetId: string) {
    const doc = new GoogleSpreadsheet(sheetId)

    await doc.useServiceAccountAuth(config.serviceAccount as any)
    await doc.loadInfo()

    return doc
}

export async function getClubNames(sheetInfo: typeof config.leagues.premierLeague.sheetsInfo) {
    const doc = await loadSheet(sheetInfo.sheetsId)
    const managerSheet = doc.sheetsById[sheetInfo.managersTabId]

    await managerSheet.loadCells("C3:C22")
    const rows = await managerSheet.getRows({ offset: 1, limit: 25 })

    const clubs = []

    for (const row of rows) {
        const club = managerSheet.getCellByA1(`C${row.rowIndex}`)

        console.log(club)
        break
    }
}
