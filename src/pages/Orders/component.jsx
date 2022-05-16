import {IconSelector} from "../../shared/IconSelector";
import {EmptyBlock} from "../../shared/components/EmptyBlock/component";
import {Button} from "../../shared/components/Button";

export const Orders = () => {

  if (false) {
    return <EmptyBlock title='Заказов нет' iconId='basket'/>
  }

  return <div className='h-screen my-[40px]'>
    <div className="container mx-auto max-w-[1180px]">
      <div className='space-x-2 flex justify-center items-center'>
        <IconSelector id='basket' fill='#000' size={[50, 50]}/>
        <h1 className='text-[30px] uppercase font-bold'>Заказы</h1>
      </div>
      <div className='my-[24px] flex gap-x-5'>
        <h1 className='text-[25px] uppercase font-bold'>Отправление 3</h1>
        <span className='text-white bg-secondary p-2 font-medium rounded'>Создано</span>
      </div>
      <div className='flex gap-x-5'>
        <div className='bg-white flex flex-1 flex-col rounded shadow p-[20px]'>
          <h1 className='text-[25px] uppercase font-bold'>Упаковка 1</h1>
          <div className='bg-gray-300 mt-[20px] h-[2px] w-full '/>
          <div className='flex flex-1 flex-col'>
            <div className='flex gap-x-5 mt-[20px] items-center'>
              <img width={90} height={90} src="/img/card-img.jpg" alt="card"/>
              <div className='flex flex-1 justify-between items-center'>
                <div className='flex flex-col'>
                  <span className='font-medium'>Текст</span>
                  <span className='text-[15px] opacity-50'>Текст</span>
                </div>
                <span className='text-[15px]'>1 шт.</span>
                <div className='flex flex-col'>
                  <span className='font-medium'>40 000</span>
                  <span className='text-[15px] opacity-50'>20 000</span>
                </div>
              </div>
            </div>
            <div className='flex gap-x-5 mt-[20px] items-center'>
              <img width={90} height={90} src="/img/card-img.jpg" alt="card"/>
              <div className='flex flex-1 justify-between items-center'>
                <div className='flex flex-col'>
                  <span className='font-medium'>Текст</span>
                  <span className='text-[15px] opacity-50'>Текст</span>
                </div>
                <span className='text-[15px]'>1 шт.</span>
                <div className='flex flex-col'>
                  <span className='font-medium'>40 000</span>
                  <span className='text-[15px] opacity-50'>20 000</span>
                </div>
              </div>
            </div>
            <div className='flex gap-x-5 mt-[20px] items-center'>
              <img width={90} height={90} src="/img/card-img.jpg" alt="card"/>
              <div className='flex flex-1 justify-between items-center'>
                <div className='flex flex-col'>
                  <span className='font-medium'>Текст</span>
                  <span className='text-[15px] opacity-50'>Текст</span>
                </div>
                <span className='text-[15px]'>1 шт.</span>
                <div className='flex flex-col'>
                  <span className='font-medium'>40 000</span>
                  <span className='text-[15px] opacity-50'>20 000</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-300 mt-[20px] h-[2px] w-full '/>
          <div className='flex justify-between items-center mt-[20px]'>
            <div className='flex space-x-10 items-center'>
              <span className='font-medium text-[25px]'>4 товара</span>
              <span className='font-medium text-[20px]'>25кг</span>
            </div>
            <span className='font-medium text-[25px]'>10 000</span>
          </div>
        </div>
        <div className='p-[30px] w-[380px] flex flex-col bg-white self-start shadow rounded'>
          <Button className='border-2 font-bold rounded border-customDark p-3'> Отслеживать товар</Button>
          <div className='flex flex-col mt-[48px]'>
            <div className="flex gap-x-4">
              <IconSelector id='clock'/>
              <div className='flex flex-col space-y-4'>
                <div className='flex flex-col space-y-1'>
                  <h1 className='text-[20px] font-bold'>Дата доставки</h1>
                  <span className='text-[16px]'>текст текст</span>
                </div>
                <div className='flex flex-col space-y-1'>
                  <span className='text-[16px]'>5 мая с 20:00 до 23:00</span>
                  <span className='text-[15px] font-medium cursor-pointer text-secondary'>Изменить дату и время доставки</span>
                </div>
              </div>
            </div>
            <div className='flex gap-x-4 mt-[26px]'>
              <IconSelector id='home' size={[35, 35]}/>
              <div className='flex flex-col space-y-1'>
                <h1 className='text-[20px] font-bold'>Дата доставки</h1>
                <span className='text-[16px]'>текст текст</span>
              </div>
            </div>
            <div className="bg-gray-300 w-full h-[3px] mt-[20px]"/>
            <div className='mt-[24px]'>
              <Button className='bg-secondary rounded text-white font-bold p-2'>
                Подтвердить получение товара
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
