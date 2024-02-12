import Card from "../common/Card"
import CardText from "../common/CardText"
import DurationButtons from "../common/DurationButtons"
import PercentageDisplay from "../common/PercentageDisplay"
import { Box } from "@chakra-ui/react"
// import stakingAPR from "../../config/stakingAPR.json"
import { useEffect, useState } from "react"
import LineGraph from "../common/LineGraph"

const AreaGraphCard = ({objData, yKey, yAxisUnit}: any) => {
    
    const keys: Array<string> = Object.keys(objData);

    const [selectedDuration, setSelectedDuration] = useState(keys[1]);
    const [selectedDurationData, setSelectedDurationData] = useState(objData[keys[1]]);

    useEffect(() => {
        setSelectedDurationData(objData[selectedDuration]);
    }, [selectedDuration]);

    return (
        <Card>
            <Box position={"relative"} marginBottom={"20px"}>
                <CardText content={objData.title} fontSize="16px" />
                <CardText content={selectedDurationData.text} fontSize="20px" textColor="#decfc3" fontWeight={700}>
                    <PercentageDisplay percentage={selectedDurationData.percentage} duration={selectedDurationData.duration} isIncreasing={selectedDurationData.isIncreasing} />
                </CardText>
                <DurationButtons data={objData} selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />
            </Box>
            <LineGraph lineData={selectedDurationData.chartData} xKey={selectedDuration==="1D"?"time":"date"} yKey={yKey} yAxisUnit={yAxisUnit} color={selectedDurationData.isIncreasing?"#59f0be":"#f05959"}/>
        </Card>
    )
}

export default AreaGraphCard

