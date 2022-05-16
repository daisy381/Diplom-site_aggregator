import {menuButtomList, menuList} from "./mockData";
import {IconSelector} from "../../IconSelector";
import {useRef, useState} from "react";
import cn from "classnames";
import {useLocation, useNavigate} from "react-router-dom";
import {useOutsideClick} from "../../../hooks";

export const Nav = ({isShow, toggleNavMenu, setShow}) => {
  const ref = useRef()
  useOutsideClick(ref, () => setShow(false))
  const navigate = useNavigate()
  const [activeClass, setActiveClass] = useState(null)
  const { pathname } = useLocation()
  const handleOnClick = (id, type, link) => {
    return () => {
      if (type === 'navigation') {
        handleActiveClass(id)
      }
      navigate(link)
      toggleNavMenu()
    }
  }
  const handleActiveClass = (id) => {
    setActiveClass(id)
  }
  const listItemClasses = 'flex ease-in-out cursor-pointer items-center p-3 justify-between transition-colors duration-200'

  const renderList = (list, hasArrow = false, type) => {
    return  list.map(l => (
        <li onClick={handleOnClick(l.id, type, l.link)} className={cn(listItemClasses, {
          'bg-secondary text-white rounded-md': l.id === activeClass || pathname === l.link
        })} key={l.id}>
          <div className='flex  items-center  space-x-4'>
            <IconSelector id={l.iconId} fill={l.id === activeClass || pathname === l.link ? 'white' : null}/>
            <span>{l.title}</span>
          </div>
          {hasArrow && (<IconSelector id='chevron-right' fill={l.id === activeClass || pathname === l.link ? 'white' : null}/>)}
        </li>
    ))
  }

  return (
        <div ref={ref} className={cn(
            'fixed h-full p-5 overflow-scroll transition-transform duration-200 top-0 z-40 bg-white w-1/5 -translate-x-full',
            {
              'translate-x-0': isShow
            }
        )}>
            <div className='w-full'>
              <div className='flex'>
                <h1 className='title flex-1 text-center'>EASILY</h1>
                <button onClick={toggleNavMenu} className='bg-transparent opacity-75 hover:opacity-100 transition-opacity'>X</button>
              </div>
              <ul className='space-y-2  mt-10'>
                {renderList(menuList, true, 'navigation')}
              </ul>
            </div>
            <div className='w-full pt-12'>
              <ul className='space-y-2'>
                {renderList(menuButtomList)}
              </ul>
            </div>
        </div>
  )
}
