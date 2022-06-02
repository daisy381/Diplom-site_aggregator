//library
import {useState,useCallback,useEffect} from "react";
import {Link} from "react-router-dom";

//components
import {IconSelector} from "../../../IconSelector";

export const HeaderNav = () => {
    return (
      <div className='flex items-center'>
        <div className='flex space-x-4 mr-10'>
          <Link to='/cart'>
            <IconSelector id='cart'/>
          </Link>
          <Link to='/favorites'>
            <IconSelector id='heart'/>
          </Link>
          <Link to='/orders'>
            <IconSelector id='basket'/>
          </Link>
        </div>
        <div className='rounded-full bg-gray-300 p-2.5'>
          <Link to='profile'>
            <IconSelector id='user'/>
          </Link>
        </div>
      </div>
  )
}
