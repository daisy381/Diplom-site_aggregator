//libraries
import {useEffect, useState} from "react";
import cn from "classnames";

//Charts
import {PieChart} from './charts/PieChart';
import {BarChart} from './charts/BarChart'
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

import {Table} from "./charts/Table";

//data
import category from '../../data/categories.json';
import {productsServices} from "../../services/products";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    Title,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement
);

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const labelsPie = ["Jmart","Technodom","Mechta"]

export const Reports = () => {

  const [activeItem, setActiveItem] = useState(0);
  const [title,setTitle] = useState('');
  const [services,setServices] = useState([]);
  const [brand, setBrand] = useState([]);
  const [dataBought, setDataBought] = useState([]);
  const [labelBought, setLabelBought] = useState([]);
  const [history, setHistory] = useState([]);
  const [dataHistory, setDataHistory] = useState([]);
  const [labelHistory, setLabelHistory] = useState([]);


  const dateTo = month[new Date().getMonth()]
  const dateFrom = month[new Date().getMonth()-1];
  const day = new Date().getDate();

  const onClickActiveItem = (item,index) => () => {
    getBrands(index+3);
    setTitle(item.name);
    setActiveItem(index);
  }

  async function getServices() {
    try {
      const response = await productsServices.getServiceData();
      if (!response) return;

      setServices(response);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function getBrands(id) {
    try {
      const response = await productsServices.getBrands(id);
      if (!response) return;

      setBrand(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function getHistory() {
    try {
      const response = await productsServices.getSearchHistoryData();
      if (!response) return;

      setHistory(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(()=>{
    getHistory();
    getBrands(3);
    getServices();
    setTitle(category[0].name)
  },[]);

  useEffect( ()=> {
    setDataBought(brand.map( item => item.bought))
    setLabelBought(brand.map( item => item.brand));
  },[brand]);

  useEffect( ()=> {
    setDataHistory(history.map( item => item.text))
    setLabelHistory(history.map( item => item.total_queries));
  },[history])


  return (
      <div className='my-[30px]  grid'>
        <div className="container max-w-[1180px] mx-auto">

          <div className="flex justify-between">
            {
              category.map((item, index) => (
                  <span onClick={onClickActiveItem(item,index)}
                        key={index}
                        className={cn('font-medium cursor-pointer', {'text-secondary pb-2 border-b-secondary border-b-4 w-auto': activeItem === index})}>
                    {item.name}
                  </span>
              ))
            }
          </div>

          <div className="mt-[34px] flex gap-x-10">
            <div className='bg-white flex w-1/2 justify-between rounded-3xl px-[30px] py-[30px] shadow-md'>
              <div className='flex gap-y-5 flex-col'>
                <span className='opacity-50 text-[16px] font-medium'>{title}</span>
                <span className='text-blue-900 text-[24px] font-bold'>$124 345</span>
                <div className='flex gap-x-4'>
                  <span className='text-green-500 font-bold text-[16px]'>47%</span>
                  <span className='font-medium opacity-50 text-[16px]'> since last month</span>
                </div>
              </div>
              <span className='text-[16px] opacity-50'>{day} {dateFrom} - {day} {dateTo}</span>
            </div>
            <div className='bg-white flex w-1/2 justify-between rounded-3xl px-[30px] py-[30px] shadow-md'>
              <div className='flex gap-y-5 flex-col'>
                <span className='opacity-50 text-[16px] font-medium'>Customers</span>
                <span className='text-blue-900 text-[24px] font-bold'>4 302</span>
                <div className='flex gap-x-4'>
                  <span className='text-green-500 font-bold text-[16px]'>+13%</span>
                  <span className='font-medium opacity-50 text-[16px]'> since last month</span>
                </div>
              </div>
              <span className='text-[16px] opacity-50'>{day} {dateFrom} - {day} {dateTo}</span>
            </div>
            <div className='bg-white flex w-1/2 justify-between rounded-3xl px-[30px] py-[30px] shadow-md'>
              <div className='flex gap-y-5 flex-col'>
                <span className='opacity-50 text-[16px] font-medium'>Avg.Revenue</span>
                <span className='text-blue-900 text-[24px] font-bold'>$3 000</span>
                <div className='flex gap-x-4'>
                  <span className='text-green-500 font-bold text-[16px]'>+31%</span>
                  <span className='font-medium opacity-50 text-[16px]'> since last month</span>
                </div>
              </div>
              <span className='text-[16px] opacity-50'>{day} {dateFrom} - {day} {dateTo}</span>
            </div>
          </div>

          <div className='mt-[34px] flex gap-x-10'>

            <div className="flex p-8 flex flex-col gap-y-4 bg-white w-[400px] rounded-3xl shadow-md">
              <div className='flex self-center'>
                <PieChart title = "Total sells" labels={labelsPie} data={services}/>
              </div>
              <div className='flex items-center'>
                <span className='text-[15px] opacity-50 w-[200px]'>
                  More than 1,200,000 sales are made using e-commerce
                </span>
              </div>
            </div>

            <div className="flex p-8 flex flex-col grow bg-white rounded-3xl shadow-md">
              <span className='text-blue-900 text-[22px] font-medium mb-[20px]'>Sales by country</span>
              <Table/>
            </div>
          </div>

          <div className='mt-[46px]'>
            <div className='bg-white rounded p-5 mt-[24px]'>
              <BarChart title={"Sales by bought"} labels={labelBought} data={dataBought} axis='y'/>
            </div>
          </div>

          <div className='mt-[46px]'>
            <div className='bg-white rounded p-5 mt-[24px]'>
              <BarChart title={"Most searched products"} labels={dataHistory} data={labelHistory} axis='x'/>
            </div>
          </div>
        </div>
      </div>
  )
}
