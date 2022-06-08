//library
import {useEffect, useState} from "react";

//components
import {IconSelector} from "../../shared/IconSelector";
import {BaseCard} from "../../components/Card/BaseCard";
import {EmptyBlock} from "../../shared/components/EmptyBlock/component";

//services
import {productsServices} from "../../services/products";

export const Favorites = () => {

  const[favorites,setFavorites] = useState([]);

  async function fetchData() {
    try {
      let response = await productsServices.getFavouritesData();
      setFavorites(response);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(async() => {
    await fetchData();
  }, []);


  if (!favorites.length) {
    return <EmptyBlock
        iconId='heart'
        title='Избранные пусто'
        description='Воспользуйтесь поиском, чтобы найти всё что нужно.'/>
  }

  return (
    <div className='my-[40px] grid h-screen'>
      <div className="container max-w-[1180px] mx-auto">
        <div className='space-x-2 flex justify-center items-center'>
          <IconSelector id='heart' fill='#000' size={[50, 50]}/>
          <h1 className='text-[30px] uppercase font-bold'>Избранные</h1>
        </div>
        <div className='flex flex-wrap mt-[40px] justify-center gap-10'>
          {
            favorites.map( (item,index) => (<BaseCard key={index} {...item[0]}/>))
          }
        </div>
      </div>
    </div>
  );
};
