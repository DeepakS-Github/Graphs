import { PieChart, Pie, Sector, Cell } from "recharts";

// const data = [
//   { name: "Group A", value: 30.90 },
//   { name: "Group B", value: 69.10 },
// ];

// const COLORS = ["#2f67c3", "#f1e1d4"];

const renderActiveShape = (props: any, doughnutData: any) => {
  const RADIAN = Math.PI / 180;
  // const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, name } = props;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, name } = props;
  // console.log("props", props);
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#f1e1d4"}>
        <tspan x={cx} dy={0}>{doughnutData.centerDataHead}</tspan>
        <tspan x={cx} dy={20} fontWeight="bold">{doughnutData.centerData}</tspan>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{name}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill={"#b4a89e"} fontSize={"12px"} fontWeight={"bold"}>
        {`${payload.dym} (${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


const DoughnutChart = ({ doughnutData }: any) => {

  let activeIndex: Array<number> = [];

  doughnutData.category.map((_entry: any, index: number) => {  
    activeIndex.push(index);
  })

  return (
    <PieChart width={800} height={300}>
      <Pie
        data={doughnutData.category}
        cx={"50%"}
        cy={"50%"}
        innerRadius={80}
        activeIndex={activeIndex}
        activeShape={(props: any) => renderActiveShape(props, doughnutData)}
        outerRadius={110}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
      >
        {doughnutData.category.map((_entry: any, index: number) => (
          <Cell key={`cell-${index}`} fill={doughnutData.colors[index % doughnutData.colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default DoughnutChart;
