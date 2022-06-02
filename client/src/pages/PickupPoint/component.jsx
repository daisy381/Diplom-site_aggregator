import { YMaps, Map, Placemark } from "react-yandex-maps";
import {IconSelector} from "../../shared/IconSelector";

export const PickupPoint = () => {

  const mapData = {
    center: [43.2566700,76.9286100],
    zoom: 12,
  };

  const coordinates = [
      [43.234206,76.909945],
      [43.237544,76.929807],
      [43.224230,76.924979],
      [43.224836,76.957626]
  ];

  return (
      <div className='h-screen'>
        <div className='flex flex-col items-center mt-[77px]'>
         <div className="flex flex-col">
           <h1 className='text-[30px] font-medium mb-5'>Алматы - пункты выдачи заказов Easily</h1>
           <div className='flex space-x-5'>
             <div>
               <YMaps >
                 <Map height={500} width={900}  defaultState={mapData}>
                   {coordinates.map( (coordinate,index) => <Placemark  key={index} geometry={coordinate} />)}
                 </Map>
               </YMaps>
             </div>
             <div className='flex flex-col bg-white shadow rounded p-[30px]'>
               <h1 className="text-[30px]">Выбор пункта выдачи</h1>
               <span className='opacity-50 mt-5 text-[15px]'>Населенный пункт</span>
               <div className='flex justify-between cursor-pointer mt-5 p-2 items-center rounded border-2 border-secondary'>
                 <span>Алматы</span>
                 <IconSelector id='chevron-down' size={[14, 14]} fill='black'/>
               </div>
               <div className='mt-5 overflow-hidden'>
                 <div className={'flex flex-col transition-transform space-y-4 border-2 border-secondary p-2 rounded translate-y-0'}>
                   <div className='flex flex-col'>
                     <span className='text-[14px] font-medium'>ул. Манаса, 34/1</span>
                     <span className='text-[12px] opacity-50'>Пункт выдачи IITU Срок хранения заказа: 3 дня</span>
                   </div>
                   <div className='flex flex-col'>
                     <span className='text-[14px] font-medium'>ул. Абая, 44</span>
                     <span className='text-[12px] opacity-50'>Пункт выдачи метро Байконур Срок хранения заказа: 3 дня</span>
                   </div><div className='flex flex-col'>
                   <span className='text-[14px] font-medium'>ул. Розбакиева, 247А</span>
                   <span className='text-[12px] opacity-50'>Пункт выдачи Mega Alma-Ata Срок хранения заказа: 3 дня</span>
                 </div>
                 <div className='flex flex-col'>
                   <span className='text-[14px] font-medium'>мкр. Самал-3, 1</span>
                   <span className='text-[12px] opacity-50'>Пункт выдачи Ritz Palace Срок хранения заказа: 3 дня</span>
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
