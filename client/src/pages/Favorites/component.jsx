import {IconSelector} from "../../shared/IconSelector";
import {BaseCard} from "../../components/Card/BaseCard";
import {EmptyBlock} from "../../shared/components/EmptyBlock/component";
import {productsServices} from "../../services/products";
import {useEffect, useState} from "react";

export const Favorites = () => {

  const [state,setState] = useState([]);

  async function fetchData() {
    try {
      let response = await productsServices.getFavouritesData();
      setState(response);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!state.length) {
    return <EmptyBlock iconId='heart' title='Избранные пусто' description='Воспользуйтесь поиском, чтобы найти всё что нужно.'/>
  }

  return (
    <div className='my-[40px] grid'>
      <div className="container max-w-[1180px] mx-auto">
        <div className='space-x-2 flex justify-center items-center'>
          <IconSelector id='heart' fill='#000' size={[50, 50]}/>
          <h1 className='text-[30px] uppercase font-bold'>Избранные</h1>
        </div>
        <div className='flex flex-wrap mt-[40px] justify-center gap-x-4'>
          {state.map( (item,index) => (<BaseCard key={index} {...item[0]}/>))}
        </div>
      </div>
    </div>
  );
};
