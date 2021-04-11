import config from "config"
import { GoogleSpreadsheet } from "google-spreadsheet"

async function loadSheet(sheetId: string) {
    const doc = new GoogleSpreadsheet(sheetId)

    await doc.useServiceAccountAuth(config.serviceAccount as any)
    await doc.loadInfo()

    return doc
}

export async function getManagerClub(
    sheetInfo: typeof config.leagues.premierLeague.sheetsInfo,
    managerName: string
) {
    const doc = await loadSheet(sheetInfo.sheetsId)
    const managerSheet = doc.sheetsById[sheetInfo.managersTabId]

    await managerSheet.loadCells(["A33:A158", "D33:D158", "E33:E158", "F33:F158"])

    await managerSheet.setHeaderRow(["a", "b", "c", "d", "e"])

    const rows = await managerSheet.getRows({ offset: 31, limit: 200 })

    for (let i = 0; i < rows.length; i = i + 11) {
        const clubNameRow = rows[i]
        const discordNameRow = rows[i + 3]

        const col1_clubname = managerSheet.getCellByA1(
            `A${clubNameRow.rowIndex}:D${clubNameRow.rowIndex}`
        )
        const col1_username = managerSheet.getCellByA1(`D${discordNameRow.rowIndex}`)

        const col2_clubname = managerSheet.getCellByA1(
            `E${clubNameRow.rowIndex}:F${clubNameRow.rowIndex}`
        )
        const col2_username = managerSheet.getCellByA1(`F${discordNameRow.rowIndex}`)

        if (managerName === (col1_username.value as string)?.toLowerCase()) {
            return col1_clubname.value
        }

        if (managerName === (col2_username.value as string)?.toLowerCase()) {
            return col2_clubname.value
        }
    }
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
