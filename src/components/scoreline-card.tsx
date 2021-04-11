import React from "react"
import {
    VStack,
    Box,
    Heading,
    HStack,
    Input,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Flex,
    Checkbox,
    Text,
} from "@chakra-ui/react"
import { Autocomplete } from "components/autocomplete"
import { FiPlus } from "react-icons/fi"

export const ScoresModalBody: React.FC<{ data: any }> = ({ data }) => {
    return (
        <VStack my={2} spacing={7} direction="column">
            <Box w="full">
                <Heading fontWeight="600" textAlign="left" fontSize="md" as="h4">
                    Scores
                </Heading>

                <HStack mt={1} align="center" justify="space-between">
                    <Text>{data.homeTeam}</Text>
                    <Input
                        textAlign="center"
                        variant="filled"
                        p={1}
                        w={10}
                        size="md"
                        rounded="lg"
                        defaultValue="0"
                    />
                    <Text>:</Text>
                    <Input
                        textAlign="center"
                        variant="filled"
                        p={1}
                        w={10}
                        size="md"
                        rounded="lg"
                        defaultValue="0"
                    />
                    <Text>{data.awayTeam}</Text>
                </HStack>
            </Box>

            <Box w="full">
                <Heading fontWeight="600" textAlign="left" fontSize="md" as="h4">
                    Player performance - {data.homeTeam}
                </Heading>

                {/* player search bar */}
                <Box mt={4}>
                    <Autocomplete options={data.options} />
                </Box>

                <VStack spacing={4} mt={4} align="stretch">
                    <Accordion allowToggle>
                        {[].map((i) => (
                            <AccordionItem key={i} border="none">
                                <h2>
                                    <AccordionButton px={0}>
                                        <Box flex="1" textAlign="left">
                                            Wamangituka
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>

                                <AccordionPanel px={0}>
                                    <VStack>
                                        <Flex justify="space-between" align="center" w="full">
                                            <VStack>
                                                <Text>⚽️</Text>

                                                <Input
                                                    textAlign="center"
                                                    variant="filled"
                                                    p={1}
                                                    w={9}
                                                    size="md"
                                                    rounded="lg"
                                                    defaultValue="0"
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text>🅰️</Text>

                                                <Input
                                                    textAlign="center"
                                                    variant="filled"
                                                    p={1}
                                                    w={9}
                                                    size="md"
                                                    rounded="lg"
                                                    defaultValue="0"
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text>🟨</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🟥</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🧤</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🌟</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>
                                        </Flex>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </VStack>
            </Box>

            <Box w="full">
                <Heading fontWeight="600" textAlign="left" fontSize="md" as="h4">
                    Player performance - {data.awayTeam}
                </Heading>

                {/* player search bar */}
                <Box mt={4}>
                    <Autocomplete options={data.options} />
                </Box>

                <VStack spacing={4} mt={4} align="stretch">
                    <Accordion allowToggle>
                        {[].map((i) => (
                            <AccordionItem key={i} border="none">
                                <h2>
                                    <AccordionButton px={0}>
                                        <Box flex="1" textAlign="left">
                                            Wamangituka
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>

                                <AccordionPanel px={0}>
                                    <VStack>
                                        <Flex justify="space-between" align="center" w="full">
                                            <VStack>
                                                <Text>⚽️</Text>

                                                <Input
                                                    textAlign="center"
                                                    variant="filled"
                                                    p={1}
                                                    w={9}
                                                    size="md"
                                                    rounded="lg"
                                                    defaultValue="0"
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text>🅰️</Text>

                                                <Input
                                                    textAlign="center"
                                                    variant="filled"
                                                    p={1}
                                                    w={9}
                                                    size="md"
                                                    rounded="lg"
                                                    defaultValue="0"
                                                />
                                            </VStack>

                                            <VStack>
                                                <Text>🟨</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🟥</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🧤</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>

                                            <VStack>
                                                <Text>🌟</Text>

                                                <Flex bg="whiteAlpha.50" p={2.5} rounded="md">
                                                    <Checkbox size="lg" />
                                                </Flex>
                                            </VStack>
                                        </Flex>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </VStack>
            </Box>
        </VStack>
    )
}
