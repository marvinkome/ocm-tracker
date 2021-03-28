import React from "react"
import { Layout } from "components/layout"
import { Flex, Heading, Button } from "@chakra-ui/react"

function Page() {
    return (
        <Layout title="Home">
            <Flex align="center" justify="center" direction="column" h="80vh">
                <Heading align="center">Welcome to OCM Tracker</Heading>

                <Button variant="primary" mt={10}>
                    Login with Discord
                </Button>
            </Flex>
        </Layout>
    )
}

export default Page
