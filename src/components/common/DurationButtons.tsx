import { Flex, Text } from "@chakra-ui/react"

const DurationButtons = ({ data, selectedDuration, setSelectedDuration }: any) => {
    return (
        <Flex position={"absolute"} bottom={"25%"} right={0}>
            {Object.keys(data).map((item: string, index: number) => {
                if (item !== "title") {
                    return (
                        <Text key={index} color={"#F1E1D4"} bgColor={selectedDuration === item ? "#312d2b" : ""} borderRadius={"40%"} padding={"6px 12px"} fontSize={"12px"} fontWeight={500} _hover={{
                            bgColor: "#312d2b",
                            cursor: "pointer"
                        }} onClick={() => {
                            setSelectedDuration(item)
                        }}>{item}</Text>
                    )
                }
            })}
        </Flex>
    )
}

export default DurationButtons