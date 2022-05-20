import {IconSelector} from "../../shared/IconSelector";
import React, {useEffect, useState} from "react";
import {Button} from "../../shared/components/Button";
import {usePagination} from "../../hooks";
import {useAppContext} from "../../context";
import {BaseCard} from "../../components/Card/BaseCard";
import {Pagination} from "../../components/Pagination";
import cn from "classnames";

export const Profile = () => {
  const {products} = useAppContext()
  const {paginate, currentPage, pageNumbers, currentItems} = usePagination(9, products)
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapse = () => {
    setCollapsed(prev => !prev)
  }

  return <div className='mt-[40px]'>
    <div className="container max-w-[1180px] mx-auto">
      <h1 className='font-bold text-[40px]'>Личный Кабинет</h1>
      <div className='p-[30px] mt-5 bg-white shadow flex space-x-[40px]'>
        <div className='flex flex-col'>
          <div className='rounded-full flex justify-center items-center bg-gray-300 w-[270px] h-[270px] p-[55px]'>
            <IconSelector id='user' fill='white' size={[180, 180]}/>
          </div>
          <div className='flex justify-between mx-5 mt-[40px]'>
            <img width={50} height={50} src='/img/icons/socials/telegram.svg' alt="telegram"/>
            <img width={50} height={50}  src='/img/icons/socials/youtube.svg' alt="youtube"/>
            <img width={50} height={50}  src='/img/icons/socials/twitter.svg' alt="twitter"/>
          </div>
          <div className='mt-[40px]'>
            <Button className='p-2 rounded border-2 font-bold border-customDark'>Редактировать профиль</Button>
          </div>
        </div>
        <div className="flex flex-1 gap-x-[180px] justify-between flex-wrap">
          <div className='flex flex-1 flex-col'>
            <label htmlFor="name" className='font-medium'>Имя:</label>
            <input type='text' id='name' placeholder='Иван' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="surname" className='font-medium'>Фамилия:</label>
            <input type='text' id='surname' placeholder='Иванов' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="tel" className='font-medium'>Номер телефона:</label>
            <input type='tel' id='tel' placeholder='+79860002525' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="email" className='font-medium'>E-mail:</label>
            <input type='email' id='email' placeholder='qwerty@mail.com' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="sex" className='font-medium'>Пол:</label>
            <select type='' id='sex' defaultValue='не указано' className='pt-2 text-secondary bg-white border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium'>
              <option value="Не указано">Не указано</option>
              <option value="Мужчина">Мужчина</option>
              <option value="Женщина">Женщина</option>
            </select>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="date" className='font-medium'>Дата рождения:</label>
            <input type='date' value='2011-09-29' id='date' placeholder='qwerty@mail.com' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
        </div>
      </div>
      <div className="mt-[50px] mb-[90px]">
        <div className='flex flex-col items-center mb-[50px]'>
          <h1 className='font-bold mb-[16px] text-[40px] uppercase text-center'>Купленные товары</h1>
          {collapsed ? (<img className='cursor-pointer' onClick={toggleCollapse} src="/img/icons/profile/down.svg" width={40} height={29} alt="dwon"/>) : (<img onClick={toggleCollapse} className='rotate-180 cursor-pointer' src="/img/icons/profile/down.svg" width={40} height={29} alt="down"/>)}
        </div>
         <div className='overflow-hidden'>
           <div className={cn('grid grid-cols-3 transition-all duration-300 gap-10 items-start', {
             'translate-y-0 h-auto': collapsed,
             '-translate-y-full h-0': !collapsed
           })}>
             {currentItems.map(item => <BaseCard {...item} hideOrderButton/>)}
             <div className='col-start-2 self-end'>
               <Pagination paginate={paginate} currentPage={currentPage} pageNumbers={pageNumbers}/>
             </div>
           </div>
         </div>
      </div>
    </div>
  </div>
}
