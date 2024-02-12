import Card from "../common/Card"
import CardText from "../common/CardText"
import { Box, Text } from "@chakra-ui/react"
import ZoomingBarGraph from "../common/ZoomingBarGraph"

const ZoomingBarGraphCard = () => {
    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content="Zooming Bar Graph" fontSize="16px" />
            </Box>
            <ZoomingBarGraph/>
        </Card>
    )
}

export default ZoomingBarGraphCard

