import React from "react"
import NextLink from "next/link"
import config from "config"
import { GetStaticProps, GetStaticPaths } from "next"
import { Layout } from "components/layout"
import { Box, Button, Flex, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react"

function Page() {
    return (
        <Layout title="Premier League">
            <Flex justify="center" align="center" direction="column" pt={10}>
                <Box mb={12}>
                    <Heading>Please select your club</Heading>
                </Box>

                {/* list of leagues */}
                <Wrap justify="center" spacing="24px">
                    {Array(20)
                        .fill(0)
                        .map((_, idx) => (
                            <WrapItem key={idx}>
                                <NextLink href="/premier-league/man-utd">
                                    <a>
                                        <Button py={8} px={14}>
                                            <Image boxSize="50px" src="/images/manutd.png" />
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

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.values(config.leagues).map((league) => ({
        params: { league: league.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params?.league) {
        return { notFound: true }
    }

    return { props: {} }
}

export default Page
