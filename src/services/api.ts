export async function getUser(competition: string, body: { code?: string; token?: string }) {
    const authResp = await fetch(`/api/${competition}/auth`, {
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

export async function getFixtures(competition: string, club: string) {
    const authResp = await fetch(`/api/${competition}/fixtures?club=${club}`)
    if (authResp.status !== 200) {
        throw new Error("")
    }

    const auth = await authResp.json()
    return auth
}
