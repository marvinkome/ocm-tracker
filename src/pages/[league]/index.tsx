import React from "react"
import config from "config"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import {
    Box,
    Center,
    Heading,
    Spinner,
    useDisclosure,
    useToast,
    VStack,
    Text,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react"
import { Layout } from "components/layout"
import { FiPlus } from "react-icons/fi"
import { useAuth } from "lib/auth-context"
import { getFixtures } from "services/api"
import { ScoresModalBody } from "components/scoreline-card"

const options = [
    { id: "javascript", label: "GK Cherki" },
    { id: "chakra", label: "ST Akpom" },
    { id: "cakra", label: "ST Songkrasin" },
]

function useLoginCheck(league: string) {
    const { isLoggedIn, isLoaded } = useAuth()
    const router = useRouter()

    React.useEffect(() => {
        if (!isLoggedIn && isLoaded) {
            router.push({
                pathname: "/[league]/login",
                query: { league },
            })
        }
    }, [isLoaded, isLoggedIn])
}

function useFixtures(league: string) {
    const toast = useToast()
    const { profile } = useAuth()
    const [fetchingFixtures, setFetchingFixtures] = React.useState(false)
    const [fixtures, setFixtures] = React.useState<any[]>([])

    const fetchFixtures = React.useCallback(async () => {
        setFetchingFixtures(true)
        try {
            const data = await getFixtures(league, profile.club)
            setFixtures(data.payload.fixtures)
        } catch (err) {
            console.error(err)
            toast({
                title: "Error getting fixtures",
                status: "error",
                isClosable: true,
                position: "top-right",
            })
        } finally {
            setFetchingFixtures(false)
        }
    }, [league, profile])

    React.useEffect(() => {
        if (profile.club) {
            fetchFixtures()
        }
    }, [league, profile])

    return { loading: fetchingFixtures, data: fixtures }
}

const Fixture: React.FC<{ data: any }> = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box py={6} px={4} boxShadow="xl" bg="gray.700" rounded="xl">
                <VStack mb={8} align="stretch" spacing={2}>
                    <Text fontWeight="600">
                        {data.home ? "MID" : data.opponent} vs {data.home ? data.opponent : "MID"}
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                        GW {data.gameWeek}
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
                        <ScoresModalBody
                            data={{
                                homeTeam: data.home ? "Middlesbrough" : data.opponent,
                                awayTeam: data.home ? data.opponent : "Middlesbrough",
                                options,
                            }}
                        />
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

const Page: React.FC<{ league: string }> = ({ league }) => {
    useLoginCheck(league)
    const { isLoggedIn, isLoaded } = useAuth()
    const fixturesInfo = useFixtures(league)

    if (!isLoaded || !isLoggedIn || fixturesInfo.loading) {
        return (
            <Center h="100vh">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Center>
        )
    }

    return (
        <Layout title="Home">
            <Box mt={7} borderRadius="lg" py={5} px={1}>
                <Heading color="gray.200" fontSize="xl">
                    Coming Fixtures
                </Heading>

                <VStack mt={{ md: 10, base: 5 }} align="stretch" spacing={8}>
                    {fixturesInfo.data.map((data) => (
                        <Fixture data={data} key={data.opponent} />
                    ))}
                </VStack>
            </Box>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    return {
        props: { league: ctx.params?.league },
    }
}

export const getStaticPaths = async () => {
    const paths = Object.values(config.leagues).map((v) => ({
        params: { league: v.link.replace("/", "") },
    }))

    return { paths, fallback: false }
}

export default Page
