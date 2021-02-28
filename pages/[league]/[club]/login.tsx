import React from "react"
import { Layout } from "components/layout"
import { Box, Flex, Wrap, Heading, Text, WrapItem, Image, Button } from "@chakra-ui/react"

function Page() {
    return (
        <Layout title="Man Utd">
            <Flex align="center" justify="center" direction="column" h="100vh">
                <Box textAlign="center" mb={12}>
                    <Heading>Login to access your club</Heading>
                    <Button mt={10}>Login with Discord</Button>
                </Box>
            </Flex>
        </Layout>
    )
}

export default Page
