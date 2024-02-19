import Card from "../common/Card"
import CardText from "../common/CardText"
import { Box } from "@chakra-ui/react"
import EchartsPie from "../common/EchartsPie"

const EchartPieCard = () => {
    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content="Echarts Pie Chart" fontSize="16px" />
            </Box>
            <EchartsPie/>
        </Card>
    )
}

export default EchartPieCard

