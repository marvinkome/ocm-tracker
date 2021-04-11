import PopupWindow from "lib/popupWindow"
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid"
import { toQuery, getUser } from "lib/helpers"
import { useToast } from "@chakra-ui/react"
import { useAuth } from "lib/auth-context"
import { useState } from "react"

export const useDiscordLogin = () => {
    const toast = useToast()
    const authContext = useAuth()
    const router = useRouter()
    const [isFetching, setIsFetching] = useState(false)

    const state = uuidv4()
    const query = toQuery({
        response_type: "code",
        client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_KEY,
        scope: "identify guilds",
        redirect_uri: process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI,
        prompt: "consent",
        state,
    })

    const signIn = async () => {
        setIsFetching(true)

        try {
            const data = await PopupWindow.open(
                "discord_auth",
                `https://discord.com/api/oauth2/authorize?${query}`,
                {
                    height: 800,
                    width: 600,
                }
            )

            if (data.state !== state) {
                throw new Error("State changed during authentication")
            }

            // get use details from server
            const resp = await getUser({ code: data.code, competition: `${router.query.league}` })
            authContext.signIn(resp)
        } catch (e) {
            console.log(e)
            toast({
                status: "error",
                position: "top-right",
                isClosable: true,
                title: "Error logging in",
            })
        } finally {
            authContext.setIsLoaded(true)
            setIsFetching(false)
        }
    }

    return { signIn, isFetching }
}
