import { SimpleGrid, Text } from "@chakra-ui/react"
import Card from "../common/Card"
import CardText from "../common/CardText"
import PercentageDisplay from "../common/PercentageDisplay"
import topRowData from "../../config/topRowData.json"


const OverviewTopRow = () => {
    return (
        <SimpleGrid columns={4} gap={"12px"}>
            {topRowData.map((data, index) => (
                <Card key={index}>
                    <CardText content={data.title} />
                    <CardText content={data.text} fontSize="16px" textColor="#decfc3" fontWeight={700}>
                        {data.extraContentText && <Text alignSelf={"end"} textColor="#8c8179" fontWeight={500} fontSize="12px">{data.extraContentText}</Text>}
                        {data.percentage && <PercentageDisplay percentage={data.percentage} duration={data.duration} isIncreasing={data.isIncreasing} />}
                    </CardText>
                </Card>
            ))}

        </SimpleGrid>
    )
}

export default OverviewTopRow