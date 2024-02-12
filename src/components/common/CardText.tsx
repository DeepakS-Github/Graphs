import { Text, Flex } from "@chakra-ui/react"
import { ReactNode } from "react"

interface HeadingProps {
    textColor?: string,
    fontSize?: string,
    content: string,
    children?: ReactNode
    fontWeight?: string | number
    alignItems?: string
}

const CardText = ({ textColor = "#837971", fontSize = "12px", content, children, fontWeight = 500, alignItems="center" }: HeadingProps) => {
    return (
        <Flex flexDir={"row"} gap={"2px"} alignItems={alignItems}>
            <Text textColor={textColor} fontSize={fontSize} fontWeight={fontWeight}>
                {content}
            </Text>
            {children}
        </Flex>
    )
}

export default CardText