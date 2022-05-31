import {Bar} from 'react-chartjs-2';

export const BarChart = ({title,labels,data,axis}) => {
    const options = {
        indexAxis: axis,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'right',
                usePointStyle: true,
            },
            title: {
                display: true,
                text: title,
                align: 'start',
                font: {
                    size: 20
                },
            },
        },
    }

    const dataset = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: data,
                borderColor: 'rgb(52,71,103)',
                backgroundColor: 'rgb(52,71,103)',
            }]
    }

    return (
        <Bar options={options} data={dataset}/>
    )
}
