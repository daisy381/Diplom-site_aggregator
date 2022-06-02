//library
import {useState,useCallback,useEffect} from "react";
import {Link} from "react-router-dom";

//components
import {IconSelector} from "../../../IconSelector";
import {productsServices} from "../../../../services/products";

export const HeaderNav = () => {
    const [search, setSearch] = useState('');

    const handleSearch = useCallback((e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.value);
        }
    }, []);

    useEffect(async () => {
        if (search !== '') {
            await productsServices.getByText(search);
        }
    }, [search]);


    return (
      <div className='flex items-center'>
        <div className='relative'>
          <input className='rounded-full p-2 mr-10 text-black' type="text" placeholder='Поиск' onKeyDown={handleSearch}/>
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
