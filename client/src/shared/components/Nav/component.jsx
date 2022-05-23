//library
import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

//data
import {menuButtomList, menuList} from "./mockData";

//components
import {IconSelector} from "../../IconSelector";

//styles
import cn from "classnames";

//helpers
import {useOutsideClick} from "../../../hooks";
import { deleteCookie, getCookie } from '../../../helpers/util';



export const Nav = ({isShow, toggleNavMenu, setShow}) => {

    const ref = useRef()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const token = getCookie('token');

    const [activeClass, setActiveClass] = useState(null)


    useOutsideClick(ref, () => setShow(false));

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
        return  list.map(item => (
            <li
                onClick={ handleOnClick(item.id, type, item.link) }
                className={ cn(listItemClasses,{
                    'bg-secondary text-white rounded-md': item.id === activeClass || pathname === item.link
                })}
                key={item.id}>
                <div className='flex  items-center  space-x-4'>
                    <IconSelector id={item.iconId} fill={item.id === activeClass || pathname === item.link ? 'white' : null}/>
                    <span>{item.title}</span>
                </div>
                {
                    hasArrow && (
                        <IconSelector id='chevron-right' fill={item.id === activeClass || pathname === item.link ? 'white' : null}/>
                    )
                }
            </li>
        ))
      }

  return (
        <div
            ref={ref}
            className={cn(
                'fixed h-full p-5 overflow-scroll transition-transform duration-200 top-0 z-40 bg-white w-1/5 -translate-x-full',
                {
                    'translate-x-0': isShow
                }
                )}
        >
            <div className='w-full'>
                <div className='flex'>
                    <h1 className='title flex-1 text-center'>EASILY</h1>
                    <button onClick={toggleNavMenu} className='bg-transparent opacity-75 hover:opacity-100 transition-opacity'>X</button>
                </div>
                <ul className='space-y-2  mt-10'>
                    {
                        renderList(menuList, true, 'navigation')
                    }
                </ul>
            </div>
            <div className='w-full pt-12'>
                <ul className='space-y-2'>
                    {
                        renderList(menuButtomList)
                    }
                    {
                        !token ? (
                            <li
                                className='cursor-pointer p-3 '
                                onClick={() => navigate('signin')}
                                key={9}
                            >
                                <div className='flex  items-center  space-x-4'>
                                    <IconSelector id='logout'/>
                                    <span>Login</span>
                                </div>

                            </li>
                            ):
                            (
                                <li
                                    className='cursor-pointer p-3 '
                                    onClick={() => {
                                        deleteCookie('token')
                                        navigate('signin')
                                    }}
                                    key={9}
                                >
                                    <div className='flex  items-center  space-x-4'>
                                        <IconSelector id='logout'/>
                                        <span>Logout</span>
                                    </div>

                                </li>

                            )
                    }


                </ul>
            </div>
        </div>
  )
}
