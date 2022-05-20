import {Header} from "../../../shared/components/Header";
import React, {useState} from "react";
import {useLocation, Outlet} from "react-router-dom";
import {Nav} from "../../../shared/components/Nav";
import {Modal} from "../../../shared/components/Modal";




export const MainLayout = ({children}) => {
  const [isShow, setShow] = useState(false)
  const { pathname } = useLocation()
  const toggleNavMenu = () => setShow(prev => !prev)

  return (
      <div className='grid auto-rows-auto h-auto text-customDark'>
        <Header toggleNavMenu={toggleNavMenu} isShow={isShow} isMainPage={pathname === '/'}/>
        <Nav isShow={isShow} toggleNavMenu={toggleNavMenu} setShow={setShow}/>
        <main className='bg-[#F3F3F3]'>
          <Outlet/>
        </main>
        <footer className='bg-primary h-52 w-full flex justify-center py-5 mb-0'>
          <div className='flex text-white items-center justify-around w-full'>
            <h1 className='title '>EASILY</h1>
            <ul className='grid grid-cols-3 gap-x-28'>
              <li>Домой</li>
              <li>Команда</li>
              <li>Заказы</li>
              <li>Продукты</li>
              <li>Сообщения</li>
              <li>Избранные</li>
              <li>Отчёты</li>
              <li>Поддержка</li>
              <li>Корзина</li>
            </ul>
            <div className="flex flex-col flex-shrink">
              <div className='flex flex-col'>
                <span>Телефон:</span>
                <a href="tel:87787775555">87787775555</a>
              </div>
              <div className='flex flex-col pt-5'>
                <span>Телефон:</span>
                <a href="tel:87787775555">87787775555</a>
              </div>
            </div>
            <div className='flex flex-col justify-between h-full'>
              <img width={24} height={24} src='/img/icons/socials/telegram.svg' alt="telegram"/>
              <img width={24} height={24}  src='/img/icons/socials/youtube.svg' alt="youtube"/>
              <img width={24} height={24}  src='/img/icons/socials/twitter.svg' alt="twitter"/>
            </div>
          </div>
        </footer>
        <Modal/>
      </div>
  )
}
