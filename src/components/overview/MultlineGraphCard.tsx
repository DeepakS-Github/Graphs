import Card from "../common/Card"
import CardText from "../common/CardText"
import { Box } from "@chakra-ui/react"
import MultLineGraph from "../common/MultLineGraph"

const MultlineGraphCard = () => {
    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content="Multi-line Graph" fontSize="16px" />
            </Box>
            <MultLineGraph/>
        </Card>
    )
}

export default MultlineGraphCard

