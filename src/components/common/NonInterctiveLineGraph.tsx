import {
    AreaChart,
    Area,
    // XAxis,
    // YAxis,
    // CartesianGrid,
    // Tooltip,
    ResponsiveContainer,
} from "recharts";
// import { Flex, Text } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        x: 100,
        value: 2000,
    },
    {
        x: 200,
        value: 1400,
    },
    {
        x: 300,
        value: 1000,
    },
    {
        x: 400,
        value: 950,
    },
    {
        x: 500,
        value: 900,
    },
    {
        x: 600,
        value: 800,
    },
    {
        x: 700,
        value: 700,
    },
    {
        x: 800,
        value: 600,
    },
    {
        x: 900,
        value: 500,
    },
    {
        x: 1000,
        value: 400,
    },
    {
        x: 1100,
        value: 300,
    },
    {
        x: 1200,
        value: 200,
    }
];


const NonInterctiveLineGraph = () => {

    const gradientId = `gradient-${uuidv4()}`;
    const color = "#7d114b"

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
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                        <stop offset="100%" stopColor={color} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={color}
                    strokeWidth={2}
                    fill={`url(#${gradientId})`}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default NonInterctiveLineGraph