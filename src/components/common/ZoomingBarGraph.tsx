import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Brush, 
    // Tooltip, 
    // Legend, 
    ResponsiveContainer } from 'recharts';


// Generate data points
const additionalData = Array.from({ length: 400 }, (_, index) => ({
    name: (index + 1).toString(), // Incrementing name from the last index
    pv: Math.floor(Math.random() * 1000), // Generating random pv values
}));

const data = additionalData;


const ZoomingBarGraph = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
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
                <Brush dataKey="name" height={20} stroke="#84a43c" />
                <Bar dataKey="pv" fill="#84a43c" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            </BarChart>
        </ResponsiveContainer>
    );
}


export default ZoomingBarGraph;
