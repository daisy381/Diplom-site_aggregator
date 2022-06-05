//library
import {useState} from "react";

//components
import {IconSelector} from "../../shared/IconSelector";
import {EmptyBlock} from "../../shared/components/EmptyBlock/component";
import {Button} from "../../shared/components/Button";
import {useAppContext} from "../../context";
import {addSpaces} from "../../helpers/util";

export const Orders = () => {

  const {orders,setOrders} = useAppContext()

  const [id,setId] = useState(0);

  const deleteOrder = (id) => {
    setOrders(orders.filter( (item,index) => id !== index ))
  }

  const totalCosts = orders.map( item => item.reduce((acc,elem)=> acc + elem.price,0));

  if (orders.length < 1) {
    return <EmptyBlock title='Заказов нет' iconId='basket'/>
  }

  return (
      <div className='my-[30px] grid'>
        <div className="container max-w-[1180px] mx-auto">
          <div className='space-x-2 flex justify-center items-center'>
            <IconSelector id='basket' fill='#000' size={[50, 50]}/>
            <h1 className='text-[30px] uppercase font-bold'>Заказы</h1>
          </div>
          <div className='my-[24px] flex gap-x-5'>
            <h1 className='text-[25px] uppercase font-bold'>Отправленные</h1>
            <span className='text-white bg-secondary p-2 font-medium rounded'>Создано</span>
          </div>
          <div className="flex space-x-2 mt-[20px]">
            <div className='flex flex-col flex-1 gap-y-12 bg-white rounded shadow p-[20px]'>
              {
                orders.map((item, index) => (
                    <div key={index}>
                      <h1 className='text-[25px] uppercase font-bold'>Упаковка {index+1}</h1>
                      <div className='bg-gray-300 mt-[20px] h-[2px] w-full '/>
                      <div className='flex flex-1 flex-col'>
                        {
                          item.map( (elem,index)=>(
                              <div className='flex gap-x-5 mt-[20px] items-center'
                                   key={index}
                              >
                                <img width={90} height={90} src={elem.image_url} alt="card"/>
                                <div className='flex flex-1 justify-between items-center'>
                                  <div className='flex flex-col'>
                                    <span className='font-medium w-[350px]'>{elem.name}</span>
                                  </div>
                                  <span className='text-[15px]'>1 шт.</span>
                                  <div className='flex flex-col'>
                                    <span className='font-medium'>{addSpaces(elem.price)}</span>
                                  </div>
                                </div>
                              </div>
                          ))
                        }
                      </div>
                      <div className='bg-gray-300 mt-[20px] h-[2px] w-full '/>
                      <div className='flex justify-between items-center mt-[20px]'>
                        <div className='flex space-x-10 items-center'>
                          <span className='font-medium text-[18px]'>{item.length} шт.</span>
                          <span className='font-medium text-[18px]'> Вес: {item.length*2}кг</span>
                        </div>
                        <span className='font-medium text-[22px]'>Общая сумма: {addSpaces(totalCosts[index])}тнг</span>
                      </div>
                      <Button
                          className='bg-secondary rounded text-white font-bold p-2 mt-[10px] w-[200px]'
                          onClick={()=> setId(index)}
                      >
                        Выбрать
                      </Button>
                    </div>
                  ))
                }
              </div>

              <div className='p-[30px] w-[380px] flex flex-col bg-white self-start shadow rounded'>
                <h1 className='text-[25px] uppercase font-bold'>Упаковка {id+1}</h1>
                <Button className='border-2 font-bold rounded border-customDark p-3 mt-[20px]'> Отслеживать товар</Button>
                <div className='flex flex-col mt-[48px]'>
                  <div className="flex gap-x-4">
                    <IconSelector id='clock'/>
                    <div className='flex flex-col space-y-4'>
                      <div className='flex flex-col space-y-1'>
                        <h1 className='text-[20px] font-bold'>Дата доставки</h1>
                        <span className='text-[16px]'>5 мая с 20:00 до 23:00</span>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-x-4 mt-[26px]'>
                    <IconSelector id='home' size={[35, 35]}/>
                    <div className='flex flex-col space-y-1'>
                      <h1 className='text-[20px] font-bold'>Адрес  доставки</h1>
                      <span className='text-[16px]'>г.Алматы ул.Манаса 24</span>
                    </div>
                  </div>
                  <div className="bg-gray-300 w-full h-[3px] mt-[20px]"/>
                  <div className='mt-[24px]'>
                    <Button
                        className='bg-secondary rounded text-white font-bold p-2'
                        onClick={()=> deleteOrder(id)}
                    >
                      Подтвердить получение товара
                    </Button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}
