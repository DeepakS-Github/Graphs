import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

// const data = [
//   {
//     x: 100,
//     value: 4000,
//     // y: 2400,
//   },
//   {
//     x: 200,
//     value: 3000,
//     // y: 2210,
//   },
// ];



const CustomTooltip = ({ active, payload, label, yAxisUnit }: any) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <Flex bgColor="#312c2c" gap={"4px"} flexDir={"column"} textColor="#d1d5db" px={"16px"} py={"8px"} borderRadius={"4px"} boxShadow={"sm"}>
        <Text textColor={"#837971"} fontWeight={500}>{`${payload[0].payload.date} ${payload[0].payload.time}`}</Text>
        <Flex fontSize={"14px"} gap={"2px"} textColor={"#decfc3"}>
          <Text>{payload[0].dataKey}: </Text>
          <Text fontWeight={500}>{payload[0].value} {yAxisUnit}</Text>
        </Flex>
      </Flex>
    );
  }

  return null;
};

const LineGraph = ({ lineData, color, xKey, yKey, yAxisUnit }: any) => {

  const gradientId = `gradient-${uuidv4()}`;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        // width={500}
        // height={200}
        data={lineData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#666666" />
        <XAxis
          dataKey={xKey}
          axisLine={{ stroke: "#666666", strokeWidth: 2 }}
          tick={{ fill: "#666666", fontSize: "12px" }}
        />
        <YAxis
          axisLine={{ stroke: "#666666", strokeWidth: 2 }}
          tick={{ fill: "#666666", fontSize: "12px" }}
        />
        <Tooltip
          content={<CustomTooltip yAxisUnit={yAxisUnit}/>}
          // cursor={{ stroke: "#666666", strokeWidth: 1 }}
          cursor={{ strokeDasharray: "3 3" }}
        />
        <Area
          type="monotone"
          dataKey={yKey}
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default LineGraph