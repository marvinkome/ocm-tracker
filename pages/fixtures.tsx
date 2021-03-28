import React from "react"
import { Layout } from "components/layout"
import { FiPlus } from "react-icons/fi"
import { Autocomplete } from "components/autocomplete"
import {
    Heading,
    Box,
    Text,
    Button,
    VStack,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    Input,
    HStack,
    Flex,
    Checkbox,
    ModalFooter,
    Center,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/react"

const options = [
    { id: "javascript", label: "GK Cherki" },
    { id: "chakra", label: "ST Akpom" },
    { id: "cakra", label: "ST Songkrasin" },
]

const ScoresModalBody: React.FC = () => {
    return (
        <VStack my={2} spacing={7} direction="column">
            <Box w="full">
                <Heading fontWeight="600" textAlign="left" fontSize="md" as="h4">
                    Scores
                </Heading>

                <HStack mt={1} align="center" justify="space-between">
                    <Text>Coventry City</Text>
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
                    <Text>Luton Town</Text>
                </HStack>
            </Box>

            <Box w="full">
                <Heading fontWeight="600" textAlign="left" fontSize="md" as="h4">
                    Player performance - Coventry
                </Heading>

                {/* player search bar */}
                <Box mt={4}>
                    <Autocomplete options={options} />
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
                    Player performance - Luton Town
                </Heading>

                {/* player search bar */}
                <Box mt={4}>
                    <Autocomplete options={options} />
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

function Fixture() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box py={6} px={4} boxShadow="xl" bg="gray.700" rounded="xl">
                <VStack mb={8} align="stretch" spacing={2}>
                    <Text fontWeight="600">Middlesbrough vs Luton Town</Text>
                    <Text color="gray.400" fontSize="sm">
                        GW 1
                    </Text>
                </VStack>

                <Button
                    onClick={onOpen}
                    rounded="xl"
                    variant="primary"
                    leftIcon={<FiPlus fontSize={20} />}
                >
                    Add Scoreline
                </Button>
            </Box>

            <Modal isCentered scrollBehavior="inside" onClose={onClose} size="full" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Scoreline</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <ScoresModalBody />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Add scoreline
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function Page() {
    return (
        <Layout title="Fixtures">
            <Box mt={7} borderRadius="lg" py={5} px={1}>
                <Heading color="gray.200" fontSize="xl">
                    Coming Fixtures
                </Heading>

                <VStack mt={{ md: 10, base: 5 }} align="stretch" spacing={8}>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <Fixture key={i} />
                    ))}
                </VStack>
            </Box>
        </Layout>
    )
}

export default Page
