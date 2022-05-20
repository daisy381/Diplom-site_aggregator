import {HeaderNav} from "./libs/HeaderNav";
import {Link} from "react-router-dom";
import {useMemo, useState} from "react";
import cn from 'classnames'
export const Header = ({isMainPage = false, isShow, toggleNavMenu}) => {

  const hamburgerLine = 'h-1 w-8 my-1 rounded-full bg-white'

  return <header className={cn('bg-primary row-end-1 z-30 top-0 px-[90px] py-3 w-screen', {
    'bg-transparent': isMainPage
  })}>
    <div className='flex justify-between text-white items-center'>
      <div className='flex items-center'>
        <button onClick={toggleNavMenu} className="flex flex-col h-12 w-12 mr-10 rounded justify-center items-center">
          <div className={hamburgerLine}></div>
          <div className={hamburgerLine}></div>
          <div className={hamburgerLine}></div>
        </button>
        <Link to='/'>
          <h1 className='title'>EASILY</h1>
        </Link>
      </div>
      <HeaderNav/>
    </div>
  </header>
}
