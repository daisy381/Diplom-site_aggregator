//library
import React from 'react';
import ReactECharts from 'echarts-for-react';

//Style

//Images

function PieChart() {
   const option = {
       title : {
           text: 'Total sellers',
           // subtext: 'sell in %',
           x:'center'
       },
       tooltip : {
           trigger: 'item',
           formatter: "{a} <br/>{b} : {c} ({d}%)"
       },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Apple','Samsung','Asus','Lenovo','HP','Huawei','Xiaomi','SP']
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data: [
                    { value: 40, name: 'Apple' },
                    { value: 38, name: 'Samsung' },
                    { value: 32, name: 'Asus' },
                    { value: 30, name: 'Lenovo' },
                    { value: 28, name: 'HP' },
                    { value: 26, name: 'Huawei' },
                    { value: 22, name: 'Xiaomi' },
                    { value: 18, name: 'SP' }
                ],
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
                style={{ height: 400 , width:500}}
            />
        </>
    );
}

export default PieChart;