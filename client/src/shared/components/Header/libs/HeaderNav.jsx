import {IconSelector} from "../../../IconSelector";
import {Link} from "react-router-dom";

export const HeaderNav = () => {
  return (
      <div className='flex items-center'>
        <div className='relative'>
          <input className='rounded-full p-2 mr-10' type="text" placeholder='Поиск'/>
          <span className='absolute top-2 block right-14'>
            <IconSelector id='search'/>
          </span>
        </div>
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
