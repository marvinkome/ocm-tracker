import * as admin from "firebase-admin"
import config from "config"

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            databaseURL: process.env.FIREBASE_DB_URL,
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                privateKey: ((process.env.FIREBASE_PRIVATE_KEY as string) || "").replace(
                    /\\n/g,
                    "\n"
                ),
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            }),
        })
    } catch (error) {
        console.log("Firebase admin initialization error", error.stack)
    }
}

const db = admin.database()

export async function getManagerClub(username: string, league: string) {
    const sheetId = Object.values(config.leagues).find((v) => v.id === league)?.sheetsInfo.sheetsId
    const sheetRef = db.ref(`${sheetId}/Managers`).orderByChild("name").equalTo(username)

    const value = await (await sheetRef.once("value")).val()
    const club = Object.values(value || {}).map((v: any) => v.club)[0]

    return club
}

export default admin
