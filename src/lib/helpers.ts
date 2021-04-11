export function toQuery(params: any, delimiter = "&") {
    const keys = Object.keys(params)

    return keys.reduce((str, key, index) => {
        let query = `${str}${key}=${params[key]}`

        if (index < keys.length - 1) {
            query += delimiter
        }

        return query
    }, "")
}

export function toParams(query: string) {
    const q = query.replace(/^\??\//, "")

    return q.split("&").reduce((values: any, param) => {
        const [key, value] = param.split("=")

        values[key] = value

        return values
    }, {})
}

export async function getUser(body: { competition: string; code?: string; token?: string }) {
    const authResp = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    })

    if (authResp.status !== 200) {
        throw new Error("")
    }

    const auth = await authResp.json()
    return auth
}

export async function getUserClub(userName: string) {
    const clubResp = await fetch(`/api/sheets/user-club?managerName=${userName}`)
    if (clubResp.status !== 200) {
        throw new Error("")
    }

    const clubPayload = await clubResp.json()
    return clubPayload.payload
}
