import { Text, Flex } from "@chakra-ui/react"
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

interface PercentageDisplayProps {
    fontSize?: string,
    percentage: string,
    duration: string,
    isIncreasing?: boolean,
    fontWeight?: string | number
}

const PercentageDisplay = ({ fontSize = "12px", percentage, duration, isIncreasing = false, fontWeight = 700 }: PercentageDisplayProps) => {
    return (
        <Flex justifyContent={"center"} alignItems={"center"}>
            {isIncreasing ? <TiArrowSortedUp color="#59f0be" /> : <TiArrowSortedDown color="#f05959" />}
            <Text fontSize={fontSize} textColor={isIncreasing ? "#59f0be" : "#f05959"} fontWeight={fontWeight}>
                {percentage}% ({duration})
            </Text>
        </Flex>
    )
}

export default PercentageDisplay