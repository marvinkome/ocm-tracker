import React from "react"
import NextLink from "next/link"
import { Flex, Heading, Button, Box, Wrap, WrapItem, Text, Image } from "@chakra-ui/react"
import { Layout } from "components/layout"

function Page() {
    return (
        <Layout title="Home">
            <Flex align="center" justify="center" direction="column" h="70vh">
                <Box mb={12}>
                    <Heading align="center">Welcome to OCM Tracker</Heading>
                    <Text align="center" pt={2} color="gray.400">
                        Please select league
                    </Text>
                </Box>

                {/* list of leagues */}
                <Wrap spacing={{ base: 4, md: 8 }} justify="center">
                    <WrapItem mb={{ base: 5, md: 0 }}>
                        <NextLink href="/premier-league">
                            <a>
                                <Button variant="primary" py={8} px={14}>
                                    <Image boxSize="50px" src="/images/pl-logo.png" />
                                </Button>
                            </a>
                        </NextLink>
                    </WrapItem>

                    <WrapItem>
                        <NextLink href="/championship">
                            <a>
                                <Button variant="primary" py={8} px={14}>
                                    <Image boxSize="50px" src="/images/efl-logo.png" />
                                </Button>
                            </a>
                        </NextLink>
                    </WrapItem>

                    <WrapItem>
                        <NextLink href="/bundesliga">
                            <a>
                                <Button variant="primary" py={8} px={14}>
                                    <Image boxSize="50px" src="/images/bundesliga-logo.png" />
                                </Button>
                            </a>
                        </NextLink>
                    </WrapItem>
                </Wrap>
            </Flex>
        </Layout>
    )
}

export default Page
