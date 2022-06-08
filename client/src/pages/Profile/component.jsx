import {IconSelector} from "../../shared/IconSelector";
import React  from "react";


export const Profile = () => {

  return <div className='mt-[40px] h-screen'>
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
        </div>
        <div className="flex flex-1 gap-x-[180px] justify-between flex-wrap">
          <div className='flex flex-1 flex-col'>
            <label htmlFor="name" className='font-medium'>Имя:</label>
            <input type='text' id='name' placeholder='Islam' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="surname" className='font-medium'>Фамилия:</label>
            <input type='text' id='surname' placeholder='' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="tel" className='font-medium'>Номер телефона:</label>
            <input type='tel' id='tel' placeholder='+7-701-309-40-95' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="email" className='font-medium'>E-mail:</label>
            <input type='email' id='email' placeholder='islam@islam.com' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="sex" className='font-medium'>Пол:</label>
            <select type='' id='sex' defaultValue='муж' className='pt-2 text-secondary bg-white border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium'>
              <option value="not_ident">Не указано</option>
              <option value="man">Мужчина</option>
              <option value="woman">Женщина</option>
            </select>
          </div>
          <div className='flex flex-1 flex-col'>
            <label htmlFor="date" className='font-medium'>Дата рождения:</label>
            <input type='date' defaultValue='1999-07-30' id='date' className='text-secondary border-b-2 border-b-gray-300 pb-2 focus:outline-none font-medium placeholder:text-secondary'/>
          </div>
        </div>
      </div>
    </div>
  </div>
}
