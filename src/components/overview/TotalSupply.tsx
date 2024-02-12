import Card from "../common/Card"
import CardText from "../common/CardText"
import DoughnutChart from "../common/DoughnutChart"
import DurationButtons from "../common/DurationButtons"
import PercentageDisplay from "../common/PercentageDisplay"
import { Box, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const TotalSupply = ({objData}: any) => {

    const keys: Array<string> = Object.keys(objData);

    const [selectedDuration, setSelectedDuration] = useState(keys[1]);
    const [selectedDurationData, setSelectedDurationData] = useState(objData[keys[1]]);

    useEffect(() => {
        setSelectedDurationData(objData[selectedDuration]);
    }, [selectedDuration]);

    return (
        <Card>
            <Box position={"relative"}>
                <CardText content={objData.title} fontSize="16px" />
                <CardText content={selectedDurationData.text} fontSize="20px" textColor="#decfc3" fontWeight={700}>
                    <PercentageDisplay percentage={selectedDurationData.percentage} duration={selectedDurationData.duration} isIncreasing={selectedDurationData.isIncreasing} />
                </CardText>
                <DurationButtons data={objData} selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />
            </Box>
            <Flex dir="row" justifyContent={"space-evenly"}>
                <DoughnutChart doughnutData={selectedDurationData.chartData[0]} />
                <DoughnutChart doughnutData={selectedDurationData.chartData[1]} />
            </Flex>
        </Card>
    )
}

export default TotalSupply