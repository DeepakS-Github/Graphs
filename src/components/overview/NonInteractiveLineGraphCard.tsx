import Card from "../common/Card"
import CardText from "../common/CardText"
import { Box, Text } from "@chakra-ui/react"
import NonInterctiveLineGraph from "../common/NonInterctiveLineGraph"

const NonInteractiveLineGraphCard = () => {
    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content="Non-Interactive Line Graph" fontSize="16px" />
            </Box>
            <NonInterctiveLineGraph/>
            <Text position={"absolute"} fontSize={"14px"} bottom={"30px"} px={"12px"} width={"fit-content"} py={"4px"} rounded={"20px"} bgColor={"#3d101f"} textColor={"#ba114c"}>0.22%</Text>
            <Text position={"absolute"} fontSize={"26px"} bottom={"30px"} right={"12px"} fontWeight={500} textColor={"#ecedee"}>$201,127,036</Text>
        </Card>
    )
}

export default NonInteractiveLineGraphCard

