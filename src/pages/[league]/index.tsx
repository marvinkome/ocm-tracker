import React from "react"
import { Center, Spinner } from "@chakra-ui/react"
import { LoginPage } from "containers/home"
import { Layout } from "components/layout"
import { useAuth } from "lib/auth-context"

function Page() {
    const { isLoggedIn, loaded } = useAuth()!

    if (!loaded) {
        return (
            <Center h="100vh">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Center>
        )
    }

    return <Layout title="Home">{isLoggedIn ? <p>Hello world</p> : <LoginPage />}</Layout>
}

export default Page
