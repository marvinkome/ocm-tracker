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
