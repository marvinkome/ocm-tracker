import React from "react"
import NextLink from "next/link"
import config from "config"
import { Layout } from "components/layout"
import { Box, Flex, Wrap, Heading, Text, WrapItem, Image, Button } from "@chakra-ui/react"

function Page() {
    return (
        <Layout title="Home">
            <Flex align="center" justify="center" direction="column" h="100vh">
                <Box mb={12}>
                    <Heading>Welcome to OCM Tracker</Heading>
                    <Text align="center" color="gray.400">
                        Please select league
                    </Text>
                </Box>

                {/* list of leagues */}
                <Wrap spacing={8} justify="center">
                    {Object.entries(config.leagues).map(([leagueId, league]) => (
                        <WrapItem key={leagueId}>
                            <NextLink href={league.link}>
                                <a>
                                    <Button py={8} px={14}>
                                        <Image alt={league.name} boxSize="50px" src={league.logo} />
                                    </Button>
                                </a>
                            </NextLink>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
        </Layout>
    )
}

export default Page
