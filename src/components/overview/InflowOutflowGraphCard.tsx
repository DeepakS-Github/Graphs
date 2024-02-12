import Card from "../common/Card"
import CardText from "../common/CardText"
import { Box } from "@chakra-ui/react"
import InflowOutflowBarGraph from "../common/InflowOutflowBarGraph"

const InflowOutflowGraphCard = () => {
    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content="Inflow-Outflow Bar Graph" fontSize="16px" />
            </Box>
            <InflowOutflowBarGraph/>
        </Card>
    )
}

export default InflowOutflowGraphCard

