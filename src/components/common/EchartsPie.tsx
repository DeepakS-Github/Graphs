import ReactECharts from 'echarts-for-react';

const EchartsPie: React.FC = () => {
    const option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: 'Dummy Data',
                type: 'pie',
                // radius: ['40%', '70%'],  // Set the inner and ourter radius of the pie chart to make it look like doughnut chart
                data: [
                    { value: 335, name: 'A' },
                    { value: 310, name: 'B' },
                    { value: 234, name: 'C' },
                    { value: 135, name: 'D' },
                    { value: 1548, name: 'E' },
                    { value: 675, name: 'F' },
                    { value: 848, name: 'G' },
                    { value: 420, name: 'H' },
                    { value: 530, name: 'I' },
                    { value: 1200, name: 'J' },
                    { value: 800, name: 'K' },
                    { value: 700, name: 'L' },
                    { value: 600, name: 'M' },
                    { value: 500, name: 'N' },
                    { value: 400, name: 'O' },
                    { value: 300, name: 'P' },
                    { value: 200, name: 'Q' },
                    { value: 100, name: 'R' },
                    { value: 50, name: 'S' },
                    { value: 25, name: 'T' },
                    { value: 10, name: 'U' },
                    { value: 5, name: 'V' },
                    { value: 3, name: 'W' },
                    { value: 2, name: 'X' },
                    { value: 1, name: 'Y' },
                    { value: 1, name: 'Z' }
                ],
                label: {
                    show: true,
                    formatter: '{b}: {d}%',
                    textStyle: {
                        color: 'white' // Set label text color to white
                    }
                },
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    return (
        <>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
            />
        </>
    );
};

export default EchartsPie;
