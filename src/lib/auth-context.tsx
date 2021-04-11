import React from "react"
import { useRouter } from "next/router"
import { getUser } from "lib/helpers"

// context
export type AuthContextType = {
    signIn: (payload: any) => void
    signOut: () => void
    setIsLoaded: (loaded: boolean) => void
    profile: { username: string; club: string }
    isLoggedIn: boolean
    isLoaded: boolean
}

const initialData: AuthContextType = {
    signIn: (payload: any) => null,
    signOut: () => null,
    setIsLoaded: (loaded: boolean) => null,
    profile: { username: "", club: "" },
    isLoggedIn: false,
    isLoaded: false,
}
const AuthContext = React.createContext<AuthContextType>(initialData)

export const COOKIE_NAME = "OCM_TRACKER"
export function useAuth() {
    const context = React.useContext(AuthContext)
    return context
}

// provide
function useContextReducer() {
    const initialState = {
        profile: { username: "", club: "" },
        isLoggedIn: false,
    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case "SIGN_IN": {
                const { refreshToken, ...profile } = action.payload

                localStorage.setItem(COOKIE_NAME, refreshToken)
                return { ...state, isLoggedIn: true, profile }
            }
            case "SIGN_OUT": {
                localStorage.removeItem(COOKIE_NAME)
                return { ...state, isLoggedIn: false, profile: initialState.profile }
            }
            case "RESET": {
                return initialState
            }
            default:
                throw new Error()
        }
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    const signIn = React.useCallback((payload) => {
        dispatch({ type: "SIGN_IN", payload })
    }, [])

    const signOut = React.useCallback(() => {
        dispatch({ type: "SIGN_OUT" })
    }, [])

    return {
        ...state,
        signIn,
        signOut,
    }
}

export const AuthProvider: React.FC = (props) => {
    const router = useRouter()
    const [isLoaded, setIsLoaded] = React.useState(false)
    const state = useContextReducer()

    React.useEffect(() => {
        const token = localStorage.getItem(COOKIE_NAME) // get refreshToken
        if (!token) {
            setIsLoaded(true)
            return
        }

        // load user from refreshToken
        const fn = async () => {
            try {
                const resp = await getUser({ token, competition: `${router.query.league}` })
                state.signIn(resp)
            } catch (err) {
                setIsLoaded(true)
            } finally {
                setIsLoaded(true)
            }
        }

        fn()
    }, [])

    const value = React.useMemo(() => ({ ...state, isLoaded, setIsLoaded }), [
        state,
        isLoaded,
        setIsLoaded,
    ])
    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}
