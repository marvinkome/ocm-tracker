import React from "react"
import config from "config"
import { useRouter } from "next/router"
import { Center, Spinner } from "@chakra-ui/react"
import { Layout } from "components/layout"
import { useAuth } from "lib/auth-context"

function Page() {
    const { isLoggedIn, isLoaded } = useAuth()!
    const router = useRouter()

    React.useEffect(() => {
        if (!isLoggedIn && isLoaded) {
            router.push({
                pathname: "/[league]/login",
                query: { league: router.query.league },
            })
        }
    }, [isLoaded, isLoggedIn])

    if (!isLoaded || !isLoggedIn) {
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

    return (
        <Layout title="Home">
            <p>Hello world</p>
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {},
    }
}

export const getStaticPaths = async () => {
    const paths = Object.values(config.leagues).map((v) => ({
        params: { league: v.link.replace("/", "") },
    }))

    return { paths, fallback: false }
}

export default Page
