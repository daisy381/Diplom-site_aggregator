import {useState} from "react";
import cn from "classnames";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip
} from 'chart.js';
import {Pie, Line, Bar} from 'react-chartjs-2';
import {Button} from "../../shared/components/Button";
import {IconSelector} from "../../shared/IconSelector";


ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale,
    LinearScale,
    PointElement,
    LineElement, BarElement);

const lineOptions = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Текст',
      align: 'start',
      font: {
        size: 20
      }
    },
    legend: {
      align: 'start',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        boxWidth: 5,
        textAlign: 'left',
        font: {
          size: 20
        }
      }
    },
  },

  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear' ,
      display: false,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
}
const lineLabels = [0, 100, 200, 300, 400, 500, 600, 700];
const labels = ['Текст','Текст','Текст','Текст','Текст','Текст','Текст',]
const data = {
  labels,
  datasets: [
    {
      label: 'Текст',
      data: lineLabels,
      borderColor: '#2F89CE',
      backgroundColor: '#2F89CE',
      yAxisID: 'y',

    },
    {
      label: 'Текст',
      data: [500, 655, 789, -900, 533, 120, 65],
      borderColor: '#282828',
      backgroundColor: '#282828',
      yAxisID: 'y1',
    },
  ],
};
export const Reports = () => {
  const [activeItem, setActiveItem] = useState(0)

  const onClickActiveItem = (index) => () => setActiveItem(index)

  return <div className='my-[30px]  grid'>
    <div className="container max-w-[1180px] mx-auto">
      <div className="flex justify-between">
        {new Array(12).fill(null).map((_, index) => (
            <span onClick={onClickActiveItem(index)} key={index}
                  className={cn('font-medium cursor-pointer', {'text-secondary pb-2 border-b-secondary border-b-4 w-auto': activeItem === index})}>Текст</span>
        ))}
      </div>
      <div className="mt-[34px] flex gap-x-10">
        <div className='bg-white flex w-1/2 justify-between rounded px-[30px] py-[40px] shadow-md'>
          <div className='flex gap-y-5 flex-col'>
            <span className='opacity-50 text-[20px] font-medium'>Текст</span>
            <span className='text-secondary text-[40px] font-bold'>124 345</span>
            <div className='flex gap-x-4'>
              <span className='text-secondary font-bold text-[20px]'>47%</span>
              <span className='font-bold opacity-50 text-[20px]'>Текст</span>
            </div>
          </div>
          <span className='text-[16px] opacity-50'>5 Апреля - 10 Апреля</span>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-secondary text-[40px] font-bold'>Текст</span>
          <span className='text-[30px] font-medium'>Текст Текст Текст</span>
        </div>
      </div>
      <div className='mt-[34px] flex gap-x-10'>
        <div className="flex p-8 flex flex-col gap-y-4 bg-white rounded shadow-md">

          <div className='flex self-center'>
            <Pie options={
              {
                plugins: {
                  title: {
                    display: true,
                    text: 'Текст',
                    align: 'center',
                    font: {
                      size: 30
                    }
                  },
                  legend: {
                    position: 'right',
                    labels: {
                      usePointStyle: true,
                      pointStyle: 'circle',
                      boxWidth: 5,
                      textAlign: 'right',
                      font: {
                        size: 20
                      }
                    }
                  },
                }
              }} data={
              {
                responsive: false,
                labels: ['Текст', 'Текст', 'Текст', 'Текст'],
                datasets: [{
                  data: [12, 19, 3, 5],
                  backgroundColor: [
                    '#14213D',
                    '#F9E74D',
                    '#FF5858',
                    '#2F89CE',
                  ],
                  borderColor: [
                    '#14213D',
                    '#F9E74D',
                    '#FF5858',
                    '#2F89CE',
                  ],
                  borderWidth: 1,
                }],
              }
            }/>
          </div>
          <div className='flex items-center'>
            <span className='text-[15px] opacity-50'>Текст Текст Текст Текст Текст Текст
ТекстТекстТекстТекстТекстТекстТекст
ТекстТекстТекст</span>
            <Button className='bg-secondary text-white p-3 rounded font-medium'>Текст</Button>
          </div>
        </div>
        <div className='w-1/2 bg-white rounded py-[28px] shadow flex flex-col'>
          <span className='text-[25px] px-5'>Текст</span>
          <div className='flex flex-col mt-[25px]'>
            <div className='grid grid-cols-3 px-5'>
              <span className='opacity-50'>Текст</span>
              <span className='opacity-50 justify-self-center'>Текст</span>
              <span className='opacity-50 justify-self-end'>Текст</span>
            </div>
            <div className="overflow-y-scroll px-5 flex flex-col max-h-[320px]">
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
              <div className='flex items-center gap-x-10 mt-[20px]'>
                <div className='flex items-center gap-x-5'>
                  <div className="bg-gray-400 h-[50px] w-[50px] rounded-full flex items-center justify-center">
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <div className='flex flex-col'>
                    <span className="text-secondary font-bold">Текст...</span>
                    <span className="opacity-50">Текст</span>
                  </div>
                </div>
                <div className='flex-1 ml-5'>
                  <span>Текст</span>
                </div>
                <div>
                  <span>Текст</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[46px]'>
        <div>
          <select
              className='p-3 rounded bg-white text-secondary border-b-0 focus:bg-secondary focus:text-white font-medium'>
            <option>Текст</option>
            <option>Текст</option>
          </select>
        </div>
        <div className='bg-white rounded p-5 mt-[24px]'>
          <Line options={lineOptions} data={data}/>
        </div>
      </div>
      <div className='mt-[46px]'>
        <div>
          <select
              className='p-3 rounded bg-white text-secondary border-b-0 focus:bg-secondary focus:text-white font-medium'>
            <option>Текст</option>
            <option>Текст</option>
          </select>
        </div>
        <div className='bg-white rounded p-5 mt-[24px]'>
          <Bar options={{
            indexAxis: 'y',
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
                text: 'Текст',
                align: 'start',
                font: {
                  size: 20
                },
              },
            },
          }} data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: lineLabels,
                borderColor: '#2F89CE',
                backgroundColor: '#2F89CE',
              }]
          }
          } />
        </div>
      </div>
    </div>
  </div>
}
