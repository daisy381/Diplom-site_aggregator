import {useParams} from "react-router-dom";
import {IconSelector} from "../../shared/IconSelector";
import {useMemo, useState} from "react";
import {Button} from "../../shared/components/Button";
import cn from "classnames";
import {BaseCard} from "../../components/Card/BaseCard";
import {useCart, useFavorite} from "../../hooks";

export const ProductInfo = () => {
  const {productId} = useParams()
  const products = JSON.parse(localStorage.getItem('products'))
  const product = products.length > 0 && products?.find(el => el.id === Number(productId))
  const {itemsOnCart, addItemOnCart} = useCart(product)
  const {isFavorite, toggleFavorite} = useFavorite(product)
  const cutTitle = useMemo(() => product?.name.length > 10 ? product.name.slice(0, 10).concat('...') : product.name ,[product.name.length])

  return <div className='mt-[130px]'>
    <div className="container max-w-[1180px] mx-auto">
      <div className="grid grid-cols-12 col-span-full row-start-1 h-[500px] auto-rows-auto justify-center mb-[100px]">
        <div className="col-start-1 col-end-3 flex flex-col justify-between">
          <img className='bg-white w-32 h-32 p-2 shadow' src={product.image_url} alt="card"/>
          <img className='bg-white w-32 h-32 p-2 shadow' src={product.image_url} alt="card"/>
          <img className='bg-white w-32 h-32 p-2 shadow' src={product.image_url} alt="card"/>
        </div>
        <div className="col-start-4 col-end-8 flex self-end bg-white h-full">
          <img className='w-full self-center' src={product.image_url} alt="card"/>
        </div>
        <div className="col-start-9 col-end-12 flex flex-col justify-between p-[30px] bg-white rounded shadow">
            <div>
              <h1 className='text-customDark text-[30px]'>{cutTitle}</h1>
              <div className="flex justify-between mt-2">
                <div className='flex space-x-2'>
                  <IconSelector id='star' fill='#F9E74D'/>
                  <span>3.5</span>
                </div>
                <span className='opacity-50 text-[15px]'>3 отзыва</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className='text-[40px] text-secondary font-bold'>{product.price} <span className='text-[30px]'>тг</span></span>
                <div className='text-[15px] font-bold flex items-center space-x-2'>
                  <div className='text-white bg-customDark rounded px-2 border border-customDark'>
                    729
                  </div>
                  <span>x 6</span>
                </div>
                <div className='h-[3px] bg-gray-400 mt-5'/>
                <div className="mt-5  flex flex-col">
                  <div className="text-[15px] flex space-x-2">
                    <span>Цвет</span>
                    <span className="opacity-50">красный</span>
                  </div>
                  <div className="flex mt-5 justify-between">
                    <div className="h-[50px] cursor-pointer w-[50px] shadow-md bg-red-400"/>
                    <div className="h-[50px] cursor-pointer w-[50px] shadow-md bg-black"/>
                    <div className="h-[50px] cursor-pointer w-[50px] shadow-md bg-yellow-400"/>
                    <div className="h-[50px] cursor-pointer w-[50px] shadow-md bg-gray-400"/>
                  </div>
                </div>
              </div>
            </div>
          <div className="flex items-center space-x-2">
            <Button disabled={itemsOnCart} onClick={addItemOnCart} className={
              cn('group flex justify-center py-1 cursor  transition-all rounded', {
                'hover:bg-secondary hover:border-transparent text-[15px] border border-black hover:text-white': !itemsOnCart,
                'border-gray-200 border text-gray-200': itemsOnCart
              })
            }><span className='mr-2'><IconSelector id='basket' className={cn('fill-black', {
              'group-hover:fill-white': !itemsOnCart,
              'fill-gray-200': itemsOnCart
            })}/></span>
              {itemsOnCart ? 'В корзине' : 'Добавить в корзину'}</Button>

            <div>
              {isFavorite ?  <IconSelector onClick={toggleFavorite} id='heart-filled' className='cursor-pointer'/> :  <IconSelector onClick={toggleFavorite} id='heart' className='cursor-pointer' fill='black'/>}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[100px]'>
        <h1 className="text-[30px] font-bold">Похожие товары</h1>
        <div className="flex space-x-4 mt-[30px]">
          {products.slice(0, 4).map((item, index) => (
              <BaseCard key={item.name} {...item}/>
          ))}
        </div>
      </div>
      <div className="mt-[50px]">
        <h1 className="text-[30px] font-bold">Описание</h1>
        <div className='bg-white shadow pt-5 pb-[50px] px-5 mt-[50px]'>
          Классическая спортивная модель с классическим спортивным дизайном. Присмотритесь к ним, если ищете обувь к конкретным
          комплектам одежды. Натуральная кожа внутри и снаружи, высокая укрепленная пятка, сила обхвата регулируется двумя
          застежками-липучками, стелька с анатомическим подсводником.
        </div>
      </div>
      <div className="mt-[50px]">
        <h1 className="text-[30px] font-bold">Харектеристики</h1>
        <div className="p-5 bg-white flex space-x-5 shadow mt-[50px]">
          <div className="flex flex-col gap-y-5 min-w-[200px]">
            {new Array(8).fill(null).map((_) => <li className='list-none text-gray-400'>Текст</li>)}
          </div>
          <div className="flex flex-col gap-y-5">
            {new Array(8).fill(null).map((_) => <li className='list-none font-medium min-w-[200px]'>Текст</li>)}
          </div>
          <div className="flex flex-col gap-y-5 min-w-[200px]">
            {new Array(8).fill(null).map((_) => <li className='list-none text-gray-400'>Текст</li>)}
          </div>
          <div className="flex flex-col gap-y-5">
            {new Array(8).fill(null).map((_) => <li className='list-none font-medium min-w-[200px]'>Текст</li>)}
          </div>
        </div>
      </div>
      <div className="mt-[50px] mb-[100px]">
        <h1 className="text-[30px] font-bold">Отзывы о товаре</h1>
        <div className="mt-[50px] flex gap-x-4">
          <div className="flex-col flex gap-y-4">
            <div className='bg-white shadow p-[30px]'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center space-x-2'>
                  <div className='h-14 w-14 bg-gray-400 flex items-center justify-center rounded-full'>
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <span className='text-[15px] font-bold'>Имя. Фам</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <span className='text-gray-400'>4 мая 2022</span>
                  <div className='flex items-center space-x-2'>
                    <IconSelector id='star' fill={'gold'} />
                    <span> 3.5</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-5'>
                <span>Комментарий</span>
                <p className='mt-5'>
                  прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки
                  прекрасные кроссовки прекрасные кроссовки
                </p>
                <div className="self-end mt-5">
                  <Button className='bg-secondary font-bold text-white px-8 rounded'>Открыт</Button>
                </div>
              </div>
            </div>
            <div className='bg-white shadow p-[30px]'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center space-x-2'>
                  <div className='h-14 w-14 bg-gray-400 flex items-center justify-center rounded-full'>
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <span className='text-[15px] font-bold'>Имя. Фам</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <span className='text-gray-400'>4 мая 2022</span>
                  <div className='flex items-center space-x-2'>
                    <IconSelector id='star' fill={'gold'} />
                    <span> 3.5</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-5'>
                <span>Комментарий</span>
                <p className='mt-5'>
                  прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки
                  прекрасные кроссовки прекрасные кроссовки
                </p>
                <div className="self-end mt-5">
                  <Button className='bg-secondary font-bold text-white px-8 rounded'>Открыт</Button>
                </div>
              </div>
            </div>
            <div className='bg-white shadow p-[30px]'>
              <div className='flex justify-between items-center w-full'>
                <div className='flex items-center space-x-2'>
                  <div className='h-14 w-14 bg-gray-400 flex items-center justify-center rounded-full'>
                    <IconSelector id='user' fill='white'/>
                  </div>
                  <span className='text-[15px] font-bold'>Имя. Фам</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <span className='text-gray-400'>4 мая 2022</span>
                  <div className='flex items-center space-x-2'>
                    <IconSelector id='star' fill={'gold'} />
                    <span> 3.5</span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col mt-5'>
                <span>Комментарий</span>
                <p className='mt-5'>
                  прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки прекрасные кроссовки
                  прекрасные кроссовки прекрасные кроссовки
                </p>
                <div className="self-end mt-5">
                  <Button className='bg-secondary font-bold text-white px-8 rounded'>Открыт</Button>
                </div>
              </div>
            </div>
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
                  <IconSelector id='star' fill='gold'/>
                  <IconSelector id='star' fill='gold'/>
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
}
