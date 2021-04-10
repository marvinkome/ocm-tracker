import { getUser, getUserClub } from "lib/helpers"
import React from "react"

export type AuthContextType = null | {
    signIn: (data: { username: string; refreshToken: string; club: string }) => void
    signOut: () => void
    setClub: (club: string) => void
    isLoggedIn: boolean
    loaded: boolean
    username?: string
    club?: string
}

const AuthContext = React.createContext<AuthContextType>(null)

export const COOKIE_NAME = "OCM_TRACKER"
export function useAuth() {
    const context = React.useContext(AuthContext)
    return context
}

export const AuthProvider: React.FC = (props) => {
    const [userData, setUserData] = React.useState({
        club: undefined as string | undefined,
        username: undefined as string | undefined,
    })

    const [loaded, setIsLoaded] = React.useState(false)
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const _value = {
        ...userData,
        loaded,
        isLoggedIn,

        signIn: (_data: { username: string; refreshToken: string }) => {
            const { refreshToken, ...data } = _data
            setUserData({ ...userData, ...data })
            setIsLoggedIn(true)

            localStorage.setItem(COOKIE_NAME, refreshToken)
        },

        setClub: (club: string) => {
            setUserData({ ...userData, club })
        },

        signOut: () => {
            setUserData({ club: undefined, username: undefined })
            setIsLoggedIn(false)

            localStorage.removeItem(COOKIE_NAME)
        },
    }

    React.useEffect(() => {
        const token = localStorage.getItem(COOKIE_NAME)
        if (!token) {
            setIsLoaded(true)

            return
        }

        ;(async () => {
            try {
                const resp = await getUser({ token })
                _value.signIn(resp)
                setIsLoaded(true)

                // in the background we fetch the club name
                const club = await getUserClub(resp.username).catch(() => undefined)
                _value.setClub(club)
            } catch (err) {
                _value.signOut()
                setIsLoaded(true)
            }
        })()
    }, [])

    const value = React.useMemo(() => _value, [userData, loaded, isLoggedIn])
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}
