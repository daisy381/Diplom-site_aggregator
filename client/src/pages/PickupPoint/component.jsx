import {YMaps, Map} from "react-yandex-maps";
import {IconSelector} from "../../shared/IconSelector";
import {useState} from "react";
import cn from "classnames";

export const PickupPoint = () => {
  const [isOpen, setOpen] = useState(false)

  const onToggleOpen = () => setOpen(prev => !prev)

  return (
      <div className='h-screen'>
        <div className='flex flex-col items-center mt-[77px]'>
         <div className="flex flex-col">
           <h1 className='text-[30px] font-medium mb-5'>Текст - пункты выдачи заказов Текст</h1>
           <div className='flex space-x-5'>
             <div>
               <YMaps >
                 <Map height={500} width={600}  defaultState={{ center: [55.75, 37.57], zoom: 9 }}/>
               </YMaps>
             </div>
             <div className='flex flex-col bg-white shadow rounded p-[30px]'>
               <h1 className="text-[30px]">Выбор пункта выдачи</h1>
               <span className='opacity-50 mt-5 text-[15px]'>Населенный пункт</span>
               <div onClick={onToggleOpen} className='flex justify-between cursor-pointer mt-5 p-2 items-center rounded border-2 border-secondary'>
                 <span>Текст</span>
                 {!isOpen ? (<IconSelector className='rotate-180' id='chevron-down' size={[14, 14]} fill='black'/>) : (<IconSelector id='chevron-down' size={[14, 14]} fill='black'/>)}
               </div>
               <div className='mt-5 overflow-hidden'>
                 <div className={cn('flex flex-col transition-transform space-y-4 border-2 border-secondary p-2 rounded', {
                   'translate-y-0': isOpen,
                   '-translate-y-full': !isOpen
                 })}>
                   <div className='flex flex-col'>
                     <span className='text-[14px] font-medium'>ул. Капальская, 14/22</span>
                     <span className='text-[12px] opacity-50'>Пункт выдачи AlemTat Срок хранения заказа: 3 дня</span>
                   </div>
                   <div className='flex flex-col'>
                     <span className='text-[14px] font-medium'>ул. Капальская, 14/22</span>
                     <span className='text-[12px] opacity-50'>Пункт выдачи AlemTat Срок хранения заказа: 3 дня</span>
                   </div><div className='flex flex-col'>
                   <span className='text-[14px] font-medium'>ул. Капальская, 14/22</span>
                   <span className='text-[12px] opacity-50'>Пункт выдачи AlemTat Срок хранения заказа: 3 дня</span>
                 </div><div className='flex flex-col'>
                   <span className='text-[14px] font-medium'>ул. Капальская, 14/22</span>
                   <span className='text-[12px] opacity-50'>Пункт выдачи AlemTat Срок хранения заказа: 3 дня</span>
                 </div>


                 </div>
               </div>
             </div>
           </div>
         </div>
        </div>
      </div>
  )
}
