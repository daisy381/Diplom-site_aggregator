//library
import React from 'react';
import ReactECharts from 'echarts-for-react';

//Style

//Images


export default function BarChart(){

    const option = {
        title: {
            text: 'Prices of all products'
        },
        tooltip: {},
        legend: {
            data:['']
        },
        xAxis: {
            data: ['Laptop','Phone','Other']
        },
        yAxis: {},
        series: [
            {
                name: 'apple',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            },
            {
                name: 'samsung',
                type: 'bar',
                data: [5, 24, 123, 10, 10, 20]
            },
            ]
    };


    return (
        <ReactECharts
            option={option}
            style={{ height: 400, width:'100%'}}

        />
    )
}