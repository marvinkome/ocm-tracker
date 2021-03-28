import React from "react"
import ReactAutocomplete from "react-autocomplete"
import { Box, Input, Text } from "@chakra-ui/react"

export const Autocomplete: React.FC<{ options: any[] }> = ({ options }) => {
    const [value, setValue] = React.useState("")

    return (
        <ReactAutocomplete
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSelect={(value) => setValue(value)}
            items={options}
            shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
            }
            getItemValue={(item) => item.label}
            renderItem={(item) => (
                <Text px={2} py={3} key={item.id}>
                    {item.label}
                </Text>
            )}
            renderInput={({ as, size, ...props }) => (
                <Input placeholder="Select a player" {...props} />
            )}
            renderMenu={(items, _, style) => (
                <div style={{ ...style }}>
                    <Box bg="gray.900" shadow="md" borderRadius="4px">
                        {items}
                    </Box>
                </div>
            )}
            wrapperStyle={{}}
        />
    )
}
