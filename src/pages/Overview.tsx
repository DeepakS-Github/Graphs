import AreaGraphCard from "../components/overview/AreaGraphCard"
import OverviewTopRow from "../components/overview/OverviewTopRow"
import { Flex, SimpleGrid } from "@chakra-ui/react"
import TotalSupply from "../components/overview/TotalSupply"
import stakingAPR from "../config/stakingAPR.json"
import dymBurn from "../config/dymBurn.json"
import doughnutRowData from "../config/doughnutRowData.json"
import ibcTransfer from "../config/ibcTransfer.json"
import newAddress from '../config/newAddress.json'
import MultlineGraphCard from "../components/overview/MultlineGraphCard"
import InflowOutflowGraphCard from "../components/overview/InflowOutflowGraphCard"
import NonInteractiveLineGraphCard from "../components/overview/NonInteractiveLineGraphCard"
import ZoomingBarGraphCard from "../components/overview/ZoomingBarGraphCard"
import EchartPieCard from "../components/overview/EchartPieCard"

const Overview = () => {
  return (
    <>
      <Flex gap={"30px"} flexDir={"column"}>
        <OverviewTopRow />
        <TotalSupply objData={doughnutRowData} />
        <SimpleGrid columns={2} row={2} gap={"30px"}>
          <AreaGraphCard objData={stakingAPR} yKey="APR" yAxisUnit="%" />
          <AreaGraphCard objData={dymBurn} yKey="Amount" yAxisUnit="DYM" />
          <AreaGraphCard objData={ibcTransfer} yKey="Transfers" />
          <AreaGraphCard objData={newAddress} yKey="Addresses" />
          <MultlineGraphCard />
          <InflowOutflowGraphCard />
          <NonInteractiveLineGraphCard />
          <ZoomingBarGraphCard/>
          <EchartPieCard/>
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Overview