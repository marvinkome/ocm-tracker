import React from "react"
import { Layout } from "components/layout"
import { FiPlus } from "react-icons/fi"
import { Heading, Box, Text, Button, VStack } from "@chakra-ui/react"

function Page() {
    return (
        <Layout title="Fixtures">
            <Box mt={7} borderRadius="lg" py={5} px={1}>
                <Heading color="gray.200" fontSize="xl">
                    Coming Fixtures
                </Heading>

                <VStack mt={{ md: 10, base: 5 }} align="stretch" spacing={8}>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <Box key={i} py={6} px={4} boxShadow="xl" bg="gray.700" rounded="xl">
                            <VStack mb={8} align="stretch" spacing={2}>
                                <Text fontWeight="600">Middlesbrough vs Luton Town</Text>
                                <Text color="gray.400" fontSize="sm">
                                    GW {i + 1}
                                </Text>
                            </VStack>

                            <Button
                                rounded="xl"
                                variant="primary"
                                leftIcon={<FiPlus fontSize={20} />}
                            >
                                Add Scoreline
                            </Button>
                        </Box>
                    ))}
                </VStack>
            </Box>
        </Layout>
    )
}

export default Page
