import DiscordOauth2 from "discord-oauth2"

const oauth = new DiscordOauth2({
    clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_KEY,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    redirectUri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI,
})

export const requestToken = async ({ code, token }: { code?: string; token?: string }) => {
    const resp = await oauth.tokenRequest({
        ...(code ? { code } : { refreshToken: token }),
        grantType: code ? "authorization_code" : "refresh_token",
        scope: ["identify", "guilds"],
    })

    return resp
}

export const getUser = async (accessToken: string) => {
    const user = await oauth.getUser(accessToken)
    return user
}
