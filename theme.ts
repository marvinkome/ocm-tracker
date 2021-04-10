import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const components = {
    Button: {
        variants: {
            primary: {
                bg: "gray.50",
                color: "gray.900",
                _hover: {
                    bg: "gray.200",

                    _disabled: {
                        bg: "gray.200",
                    },
                },
                _focus: {
                    bg: "gray.200",
                },
                _active: {
                    bg: "gray.200",
                },
                _loading: {
                    bg: "gray.200",
                },
            },
        },
    },
}

const typography = {
    fonts: {
        body: "Rubik, sans-serif",
        heading: "Rubik, sans-serif",
    },
}

export default extendTheme({
    config,
    components,
    ...typography,
})
