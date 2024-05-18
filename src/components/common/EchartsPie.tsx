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
                radius: ['40%', '70%'],  // Set the inner and ourter radius of the pie chart to make it look like doughnut chart
                data: [
                    { value: 335, name: 'A', head: 'Bounded' },
                    { value: 310, name: 'B', head: 'Unbounded' },
                    { value: 234, name: 'C', head: 'Unbounded' },
                    { value: 135, name: 'D', head: 'Bounded' },
                ],
                label: {
                    show: true,
                    formatter: function (params: any) {
                        console.log(params);
                        return `{a|${params.data.head}}\n{b|${params.name}:} {c|${params.value}}`;
                    },
                    rich: {
                        a: {
                            // color: function(params: any) {
                            //     return params.color;
                            // },
                            color: 'white',
                            fontSize: '14px',
                            height: 30,
                            fontWeight: 600,
                        },
                        b: {
                            color: 'white', 
                            fontSize: '12px',
                        },
                        c: {
                            color: 'white', 
                            fontSize: '12px',
                        }
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
