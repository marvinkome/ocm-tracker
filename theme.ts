import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const components = {
    Button: {
        variants: {
            solid: {
                bg: "gray.50",
                _hover: {
                    bg: "gray.300",
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
