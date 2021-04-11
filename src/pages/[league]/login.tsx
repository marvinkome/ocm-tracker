import React from "react"
import config from "config"
import { useRouter } from "next/router"
import { Layout } from "components/layout"
import { Flex, Heading, Button, Image, Box, Center } from "@chakra-ui/react"
import { useDiscordLogin } from "hooks/discord-login"

export default function LoginPage() {
    const { query, ...router } = useRouter()
    const league = Object.values(config.leagues).find((v) => v.link === `/${query.league}`)
    const discordSignIn = useDiscordLogin()

    const signIn = async () => {
        await discordSignIn.signIn()
        router.push({
            pathname: "/[league]",
            query: { league: league?.id },
        })
    }

    return (
        <Layout title="Login">
            <Flex align="center" justify="center" direction="column" h="80vh">
                <Box boxSize="100px" mb={5} bg="whiteAlpha.800" p={3} rounded="full">
                    <Center>
                        <Image src={league?.logo} alt={league?.name} />
                    </Center>
                </Box>

                <Heading fontSize="2xl" align="center">
                    {league?.name}
                </Heading>

                <Button
                    isLoading={discordSignIn.isFetching}
                    onClick={signIn}
                    variant="primary"
                    size="lg"
                    mt={12}
                >
                    Login with Discord
                </Button>
            </Flex>
        </Layout>
    )
}
