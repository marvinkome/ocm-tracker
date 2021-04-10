import React from "react"
import config from "config"
import { useRouter } from "next/router"
import { Flex, Heading, Button, Image, Box, Center } from "@chakra-ui/react"
import { useDiscordLogin } from "hooks/discord-login"

export function LoginPage() {
    const { query } = useRouter()
    const league = Object.values(config.leagues).find((v) => v.link === `/${query.league}`)
    const discordSignIn = useDiscordLogin()

    return (
        <Flex align="center" justify="center" direction="column" h="80vh">
            <Box boxSize="200px" mb={5} bg="whiteAlpha.800" p={5} rounded="full">
                <Center>
                    <Image src={league?.logo} alt={league?.name} />
                </Center>
            </Box>

            <Heading fontSize="2xl" align="center">
                {league?.name}
            </Heading>

            <Button
                isLoading={discordSignIn.isFetching}
                onClick={discordSignIn.signIn}
                variant="primary"
                size="lg"
                mt={12}
            >
                Login with Discord
            </Button>
        </Flex>
    )
}
