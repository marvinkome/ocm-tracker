import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { AuthProvider } from "lib/auth-context"
import theme from "../../theme"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </ChakraProvider>
    )
}

export default MyApp
