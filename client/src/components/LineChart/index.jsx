//library
import React from 'react';
import ReactECharts from 'echarts-for-react';

//Style

//Images


export default function LineChart(){

    const option = {
        title: {
            text: 'Monthly Changes'
        },
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom: {},
                restore: {}
            }
        },
        tooltip: {},
        legend: {
            data:['apple','samsung']
        },
        xAxis: {
            data: ['09 Apr', '10 Apr', '11 Apr', '12 Apr', '01 Apr', '02 Apr']
        },
        yAxis: {},
        series: [
            {
                name: 'apple',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: 'samsung',
                type: 'line',
                data: [15, 30, 16, 50, 30, 10]
            }
        ]
    };


    return (
        <ReactECharts
            option={option}
            style={{ height: 400 , width:500}}

        />
    )
}