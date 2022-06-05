//library
import {useEffect, useMemo, useState} from "react";
import {useParams} from "react-router-dom";

//components
import {IconSelector} from "../../shared/IconSelector";
import {Button} from "../../shared/components/Button";
import {BaseCard} from "../../components/Card/BaseCard";
import {Rate} from "antd";

//helpers
import {useCart,useFavorite} from "../../hooks";
import {addSpaces, valueDefined} from "../../helpers/util";
import {productsServices} from "../../services/products";

//data
import comments from "../../data/comment.json";

//styles
import cn from "classnames";

export const ProductInfo = () => {
  const {productId} = useParams()

  const [state,setState] = useState({});

  const {itemsOnCart, addItemOnCart} = useCart(state)
  const {isFavorite, toggleFavorite} = useFavorite(state)
  const [nearest,setNearest] = useState([]);

  const cutTitle = useMemo(() => state?.name,[state?.name?.length])
  const rate =  Math.floor(10 + Math.random() * (100 + 1 - 10));


  async function fetchData() {
    try {
      let response = await productsServices.getProductsPage(productId);
      setState(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  function getNearest() {
    return fetch(`${process.env.REACT_APP_SERVERLESS_URL}/api/products?category_id=3&limit=10&brand=${state.brand}`, {
      headers: {
        'Content-type': 'application/json',
      },
    })
        .then((response) => response.json());
  }

  async function fetchNearestData(){
    try{
      let response = await getNearest();
      setNearest(response.data);
    } catch (e) {
      console.error(e.message);
    }

  }

  useEffect(async () => {
    await fetchData()
  }, []);

  useEffect( async ()=>{
    await fetchNearestData()
  },[state])

  return (
      <div className='mt-[130px]'>
        <div className="container max-w-[1180px] mx-auto">
          <div className="grid grid-cols-12 col-span-full row-start-1 h-[500px] auto-rows-auto justify-center mb-[100px]">

            <div className="col-start-1 col-end-8 flex self-end bg-white rounded-md h-full">
              <img className='w-full self-center rounded-md' src={state?.image_url} alt="card"/>
            </div>
            <div className="col-start-9 col-end-13 flex flex-col justify-between p-[30px] bg-white rounded-md shadow">
              <div>
                <h1 className='text-customDark text-[18px]'>{cutTitle}</h1>

                <div className="flex justify-between mt-2">
                  <div className='flex space-x-2 mt-[10px]'>
                    <Rate style={{display:'inherit',fontSize:30}} disabled value={state?.rating}/>
                  </div>
                  <span className='opacity-50 text-[22px] mt-[20px]'>{rate} reviews</span>
                </div>

                <div className="flex flex-col gap-2 mt-[40px]">
                  <div className="flex gap-4">
                    <IconSelector id='truck' className='ml-[20px]'/>
                    <span className="mt-[4px] text-[16px]">Delivery May 24 - free</span>
                  </div>
                  <div className="flex gap-4">
                    <IconSelector id='truck' className='ml-[20px]'/>
                    <span className="mt-[4px] text-[16px]">Will be ready for pickup on May 23</span>
                  </div>
                </div>

                <div className='h-[3px] bg-gray-400 mt-5'/>

                <div className="flex flex-col mt-5 h-[100px] bg-slate-100 rounded">
                  <div className="flex justify-between mt-2 p-2">
                    <span className='text-[18px]'>В кредит</span>
                    <span>{Math.floor(state?.price / 60)} тнг x 60</span>
                  </div>
                  <div className="flex justify-between mt-2 p-2">
                    <span className='text-[18px] '>В рассрочку</span>
                    <span>{Math.floor(state?.price / 24)} тнг x 24</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-[20px]">
                  <span className='text-[40px] text-secondary font-bold'>{addSpaces(state?.price)} <span className='text-[30px]'>тг</span></span>
                </div>

              </div>

              <div className="flex items-center space-x-2">
                <Button disabled={itemsOnCart} onClick={addItemOnCart} className={
                  cn('group flex justify-center py-1 cursor  transition-all rounded', {
                    'hover:bg-secondary hover:border-transparent text-[15px] border border-black hover:text-white': !itemsOnCart,
                    'border-gray-200 border text-gray-200': itemsOnCart
                  })
                }>
                  <span className='mr-2'>
                    <IconSelector id='basket' className={cn('fill-black', {
                      'group-hover:fill-white': !itemsOnCart,
                      'fill-gray-200': itemsOnCart
                    })}/>
                  </span>
                  {
                    itemsOnCart ? 'В корзине' : 'Добавить в корзину'}
                </Button>
                <div>
                  {
                    isFavorite ?
                        <IconSelector onClick={toggleFavorite} id='heart-filled' className='cursor-pointer'/>
                        :
                        <IconSelector onClick={toggleFavorite} id='heart' className='cursor-pointer' fill='black'/>}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-[200px]'>
            <h1 className="text-[30px] font-bold">Похожие товары</h1>
            <div className="flex space-x-4 mt-[30px]">
              {
                nearest.slice(0, 4).map((item, index) => (
                    <BaseCard key={item.name} {...item}/>
                ))
              }
            </div>
          </div>
          <div className="mt-[50px]">
            <h1 className="text-[30px] font-bold">Описание</h1>
            <div className='bg-white shadow pt-5 pb-[20px] px-5 mt-[50px]'>
              {
                valueDefined(!state.description) ?
                    (
                        <div>Описание отсутсвует</div>
                    ):
                    (
                        <div>{state.description}</div>
                    )
              }

            </div>
          </div>
          <div className="mt-[50px] mb-[100px]">
            <h1 className="text-[30px] font-bold">Отзывы о товаре</h1>
            <div className="mt-[50px] flex gap-x-4">
              <div className="flex-col flex gap-y-4 w-[700px]">

              {
                comments.map((item,index) => (
                      <div className='bg-white shadow p-[30px]' key={index}>
                        <div className='flex justify-between items-center w-full'>
                          <div className='flex items-center space-x-2'>
                            <div className='h-14 w-14 bg-gray-400 flex items-center justify-center rounded-full'>
                              <IconSelector id='user' fill='white'/>
                            </div>
                            <span className='text-[15px] font-bold'>{item.name}</span>
                          </div>
                          <div className='flex space-x-2 items-center'>
                            <span className='text-gray-400'>4 мая 2022</span>
                            <div className='flex items-center space-x-2'>
                              <IconSelector id='star' fill={'gold'} />
                              <span>{item.rate}</span>
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col mt-5'>
                          <span>Комментарий</span>
                          <p className='mt-5'>
                            {item.comment}
                          </p>
                        </div>
                      </div>
                ))
              }
              </div>




              <div className='p-[30px] flex flex-col self-start  w-[470px] bg-white shadow'>
            <div className='flex justify-between'>
              <div className='flex items-center space-x-2'>
                <IconSelector id='star' fill='gold'/>
                <IconSelector id='star' fill='gold'/>
                <IconSelector id='star' fill='gold'/>
                <IconSelector id='star' fill='gray'/>
                <IconSelector id='star' fill='gray'/>
              </div>
              <span className='font-medium'>3 <span>/</span> 5</span>
            </div>
            <div className='mt-5 w-full bg-gray-200 h-[2px]'/>
            <div className="flex flex-col gap-y-4 mt-5">
              <div className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                </div>
                <span className='font-medium'>1</span>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gray'/>
                </div>
                <span className='font-medium'>2</span>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gray'/>
                  <IconSelector id='star' fill='gray'/>
                  <IconSelector id='star' fill='gray'/>
                </div>
                <span className='font-medium'>4</span>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gray'/>
                  <IconSelector id='star' fill='gray'/>
                  <IconSelector id='star' fill='gray'/>
                  <IconSelector id='star' fill='gray'/>
                </div>
                <span className='font-medium'>3</span>
              </div>
            </div>
            <div className='mt-5'>
              <Button className='bg-secondary text-white font-bold rounded py-3'>Написать отзыв</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
