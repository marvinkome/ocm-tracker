import React from "react"
import NextLink from "next/link"
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
                    <WrapItem>
                        <NextLink href="/premier-league">
                            <a>
                                <Button py={8} px={14}>
                                    <Image boxSize="50px" src="/images/pl-logo.png" />
                                </Button>
                            </a>
                        </NextLink>
                    </WrapItem>

                    <WrapItem>
                        <NextLink href="/championship">
                            <a>
                                <Button py={8} px={14}>
                                    <Image boxSize="50px" src="/images/efl-logo.png" />
                                </Button>
                            </a>
                        </NextLink>
                    </WrapItem>

                    <WrapItem>
                        <NextLink href="/bundesliga">
                            <a>
                                <Button py={8} px={14}>
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
