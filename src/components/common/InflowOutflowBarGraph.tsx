import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: -4000,
        pv: 6400,
    },
    {
        name: 'Page B',
        uv: -3000,
        pv: 1398,
    },
    {
        name: 'Page C',
        uv: -2000,
        pv: 9800,
    },
    {
        name: 'Page D',
        uv: -2780,
        pv: 3908,
    },
    {
        name: 'Page E',
        uv: -1890,
        pv: 4800,
    },
    {
        name: 'Page F',
        uv: -2390,
        pv: 3800,
    },
    {
        name: 'Page G',
        uv: -3490,
        pv: 4300,
    },
    {
        name: 'Page H',
        uv: -4200,
        pv: 5600,
    },
    {
        name: 'Page I',
        uv: -5000,
        pv: 7200,
    },
    {
        name: 'Page J',
        uv: -3200,
        pv: 6700,
    },
    {
        name: 'Page K',
        uv: -2800,
        pv: 8600,
    },
    {
        name: 'Page L',
        uv: -3200,
        pv: 9800,
    },
    {
        name: 'Page M',
        uv: -4500,
        pv: 7300,
    },
    {
        name: 'Page N',
        uv: -3800,
        pv: 8700,
    },
    {
        name: 'Page O',
        uv: -4200,
        pv: 9300,
    },
    {
        name: 'Page P',
        uv: -4700,
        pv: 8900,
    },
    {
        name: 'Page Q',
        uv: -5100,
        pv: 9200,
    },
    {
        name: 'Page R',
        uv: -5500,
        pv: 8600,
    },
    {
        name: 'Page S',
        uv: -5900,
        pv: 9200,
    },
    {
        name: 'Page T',
        uv: -6300,
        pv: 9800,
    },
    {
        name: 'Page U',
        uv: -6700,
        pv: 9300,
    },
    {
        name: 'Page V',
        uv: -7100,
        pv: 8700,
    },
    {
        name: 'Page W',
        uv: -7500,
        pv: 9200,
    },
    {
        name: 'Page X',
        uv: -7900,
        pv: 9600,
    },
    {
        name: 'Page Y',
        uv: -8300,
        pv: 9100,
    },
    {
        name: 'Page Z',
        uv: -8700,
        pv: 8800,
    },
    {
        name: 'Page AA',
        uv: -9000,
        pv: 9200,
    },
    {
        name: 'Page AB',
        uv: -9300,
        pv: 9700,
    },
    {
        name: 'Page AC',
        uv: -9600,
        pv: 9200,
    },
    {
        name: 'Page AD',
        uv: -9900,
        pv: 8800,
    },
    {
        name: 'Page AE',
        uv: -10200,
        pv: 9400,
    },
    {
        name: 'Page AF',
        uv: -10500,
        pv: 9800,
    },
    {
        name: 'Page AG',
        uv: -10800,
        pv: 9100,
    },
    {
        name: 'Page AH',
        uv: -11100,
        pv: 9700,
    },
    {
        name: 'Page AI',
        uv: -11400,
        pv: 9200,
    },
    {
        name: 'Page AJ',
        uv: -11700,
        pv: 8800,
    },
    {
        name: 'Page AK',
        uv: -5000,
        pv: 9400,
    },
    {
        name: 'Page AL',
        uv: -9300,
        pv: 9700,
    },
    {
        name: 'Page AM',
        uv: -7600,
        pv: 9200,
    },
    {
        name: 'Page AN',
        uv: -10900,
        pv: 8800,
    },
    {
        name: 'Page AO',
        uv: -13200,
        pv: 9300,
    },
    {
        name: 'Page AP',
        uv: -8500,
        pv: 9800,
    },
    {
        name: 'Page AQ',
        uv: -12800,
        pv: 9100,
    },
    {
        name: 'Page AR',
        uv: -10100,
        pv: 9700,
    },
    {
        name: 'Page AS',
        uv: -12400,
        pv: 9200,
    },
    {
        name: 'Page AT',
        uv: -10700,
        pv: 8800,
    },
    {
        name: 'Page AU',
        uv: -1000,
        pv: 9400,
    }]

// Custom shape function for rounded corners
const CustomBarShapeTop = (props: any) => {
    const {
        fill,
        x,
        y,
        width,
        height,
    } = props;

    const curveSize = 6; // Adjust this value to control the roundness

    return (
        <path
            fill={fill}
            d={`M${x},${y + height} 
                h${width} 
                v${-height + curveSize} 
                q0,-${curveSize} -${curveSize},-${curveSize} 
                h${-width + 2 * curveSize} 
                q-${curveSize},0 -${curveSize},${curveSize} 
                v${height - curveSize} 
                z`}
        />
    );
};

const CustomBarShapeBottom = (props: any) => {
    const { fill, x, y, width, height } = props;

    const curveSize = 6; // Adjust this value to control the roundness

    return (
        <path
            fill={fill}
            d={`M${x},${y + height} 
            h${width} 
            v${-height + curveSize} 
            q0,${curveSize} -${curveSize},${curveSize} 
            h${-width + 2 * curveSize} 
            q-${curveSize},0 -${curveSize},-${curveSize} 
            v${-height + curveSize} 
            z`}
        />
    );
};



const InflowOutflowBarGraph = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                stackOffset="sign"
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey={"name"}
                    axisLine={{ stroke: "#666666", strokeWidth: 2 }}
                    tick={{ fill: "#666666", fontSize: "12px" }}
                />
                <YAxis
                    axisLine={{ stroke: "#666666", strokeWidth: 2 }}
                    tick={{ fill: "#666666", fontSize: "12px" }}
                />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <ReferenceLine y={0} stroke="#666666" strokeWidth={2} />
                <Bar dataKey="pv" fill="#0a754f" shape={<CustomBarShapeTop />} stackId="stack" />
                <Bar dataKey="uv" fill="#871150" shape={<CustomBarShapeBottom />} stackId="stack" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default InflowOutflowBarGraph;
