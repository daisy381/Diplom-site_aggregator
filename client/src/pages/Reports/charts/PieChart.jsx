import {Pie} from 'react-chartjs-2';

export const PieChart = ({title,labels,data}) => {
    data = data?.length > 0 ? data.map(item => item.bought) : [0,0,0];

    const pieChartOptions = {
        plugins: {
            title: {
                display: true,
                text: title,
                align: 'center',
                font: {
                    size: 22,
                },
                color: 'rgb(30 58 138)',
            },
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 5,
                    textAlign: 'left',
                    font: {
                        size: 20
                    },
                }
            },
        }
    };

    const pieChartData = {
        responsive: false,
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: [
                '#14213D',
                '#F9E74D',
                '#FF5858',
            ],
            borderColor: [
                '#14213D',
                '#F9E74D',
                '#FF5858',
            ],
            borderWidth: 1,
        }]
    }

    return (
        <Pie options={pieChartOptions} data={pieChartData}/>
    )

}