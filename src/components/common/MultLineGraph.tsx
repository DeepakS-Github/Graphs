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


const data = [
    {
        x: 100,
        value: [4000, 600, 7000, 20],
    },
    {
        x: 200,
        value: [3000, 1000, 30, 60],
    },
    {
        x: 300,
        value: [2000, 800, 5000, 40],
    },
    {
        x: 400,
        value: [5000, 1200, 100, 80],
    },
    {
        x: 500,
        value: [6000, 1400, 200, 5100],
    },
    {
        x: 600,
        value: [7000, 1600, 300, 4120],
    },
    {
        x: 700,
        value: [8000, 1800, 400, 1140],
    },
    {
        x: 800,
        value: [9000, 2000, 500, 160],
    },
    {
        x: 900,
        value: [10000, 11100, 1600, 180],
    },
    {
        x: 1000,
        value: [9000, 12400, 1700, 4200],
    },
    {
        x: 1100,
        value: [11000, 4600, 8400, 1220],
    },
    {
        x: 1200,
        value: [10000, 8800, 7900, 5440],
    }
];




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

const MultLineGraph = () => {

    const gradientId1 = `gradient-${uuidv4()}`;
    const gradientId2 = `gradient-${uuidv4()}`;
    const gradientId3 = `gradient-${uuidv4()}`;
    const gradientId4 = `gradient-${uuidv4()}`;

    const color1 = "#baaa18";
    const color2 = "#ba1871";
    const color3 = "#7300ff";
    const color4 = "#53fa00";

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart
                // width={500}
                // height={200}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id={gradientId1} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color1} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={color1} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id={gradientId2} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color2} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={color2} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id={gradientId3} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color3} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={color3} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id={gradientId4} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color4} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={color4} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#666666" />
                <XAxis
                    dataKey="x"
                    axisLine={{ stroke: "#666666", strokeWidth: 2 }}
                    tick={{ fill: "#666666", fontSize: "12px" }}
                />
                <YAxis
                    axisLine={{ stroke: "#666666", strokeWidth: 2 }}
                    tick={{ fill: "#666666", fontSize: "12px" }}
                />
                <Tooltip
                    // content={<CustomTooltip yAxisUnit={yAxisUnit} />}
                    // cursor={{ stroke: "#666666", strokeWidth: 1 }}
                    cursor={{ strokeDasharray: "3 3" }}
                />
                <Area
                    type="monotone"
                    dataKey="value[0]"
                    stroke={color1}
                    strokeWidth={2}
                    fill={`url(#${gradientId1})`}
                />
                <Area
                    type="monotone"
                    dataKey="value[1]"
                    stroke={color2}
                    strokeWidth={2}
                    fill={`url(#${gradientId2})`}
                />
                <Area
                    type="monotone"
                    dataKey="value[2]"
                    stroke={color3}
                    strokeWidth={2}
                    fill={`url(#${gradientId3})`}
                />
                <Area
                    type="monotone"
                    dataKey="value[3]"
                    stroke={color4}
                    strokeWidth={2}
                    fill={`url(#${gradientId4})`}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default MultLineGraph