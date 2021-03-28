import React from "react"
import Head from "next/head"
import { Container, Flex, Heading, HStack, Text } from "@chakra-ui/react"

export function Layout({ children, title }: { children: any; title: string }) {
    return (
        <>
            <Head>
                <title>{`${title ? title + " -" : ""} OCM Tracker`}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Flex
                direction={{ base: "column", md: "row" }}
                justify="space-between"
                px={{ md: 14, base: 5 }}
                mt={{ md: 10, base: 5 }}
            >
                <Heading color="green.200" size="xl">
                    OCM Tracker
                </Heading>

                <HStack mt={{ base: 2, md: 0 }}>
                    <Text fontWeight="bold">Middlesbrough</Text>
                    <Text>-</Text>
                    <Text>@marvinkome</Text>
                </HStack>
            </Flex>

            <Container my={5}>{children}</Container>
        </>
    )
}
