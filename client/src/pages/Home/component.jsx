//library
import {useEffect, useState} from "react";

// components
import {Button} from "../../shared/components/Button";
import {IconSelector} from "../../shared/IconSelector";
import {SmallCard} from "../../components/Card";

//data
import products from '../../data/main_product.json';
import members from '../../data/members.json';


export const Home = () => {

  const [productsActive,setProductsActive] = useState(false);

  return (
      <>
        <section className='
            bg-mainBg relative h-screen -top-24 z-10 bg-cover
            before:absolute before:bg-customDark before:top-0 before:h-full
            before:block before:w-full before:opacity-50 before:-z-10'
        >
            <div className='container max-w-[1180px] mx-auto flex h-full'>
              <div className="text-white flex flex-col self-center">
                <div className='flex text-[40px] flex-col font-medium mt-5'>
                  <span>
                    Use easily
                  </span>
                  <span>
                    make your life easier
                  </span>
                  <span>
                    manage your purchases
                  </span>
                </div>
                <Button variant='rounded' color='bg-secondary' className='max-w-[250px] mt-5 font-semibold text-[24px]'>
                  Join us
                </Button>
              </div>
            </div>
        </section>
        <section className=''>
          <div className="container max-w-[1180px] mx-auto">
            <h1 className="title text-center mb-16">Products</h1>
            <div className="flex mb-5 space-x-8">
              {
                products[0].map((item,index) => (<SmallCard key={index} item={item}/>))
              }
            </div>
            {
              productsActive && (
                  <>
                    <div className="flex mb-5 space-x-8">
                      {
                        products[1].map((item,index) => (<SmallCard key={index} item={item}/>))
                      }
                    </div>
                    <div className="flex mb-5 space-x-8">
                      {
                        products[2].map((item,index) => (<SmallCard key={index} item={item}/>))
                      }
                    </div>
                  </>
              )
            }
            <div className='flex justify-center my-5'>
              <button onClick={()=> setProductsActive(prev => !prev)} className='inline-flex group justify-center items-center cursor-pointer bg-secondary rounded-full w-[90px] h-[90px]'>
                <span
                    className='group-hover:translate-y-3 transition-transform'>
                  <IconSelector id='chevron-down' className={productsActive ? 'rotate-180' : 'rotate-0'}/>
                </span>
              </button>
            </div>
          </div>
        </section>
        <section className='mt-[200px]'>
          <div className="container max-w-[1180px] mx-auto">
            <div className="flex space-x-12">
              <img className='max-w-[500px]' src="/img/e-commerce.jpeg" alt="iphone1"/>
              <div className="flex-col inline-flex">
                <h1 className="title text-secondary">About us</h1>
                <p className='mt-5 leading-[30px] text-[20px]'>
                  Задача организации, в особенности же консультация с профессионалами из IT в значительной
                  степени обуславливает создание дальнейших направлений развития проекта. Задача организации,
                  в особенности же рамки и место обучения кадров способствует повышению актуальности модели развития?
                  Таким образом, постоянное информационно-техническое обеспечение нашей деятельности играет важную
                  роль в формировании модели развития.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-[200px]'>
          <div className="container max-w-[1180px] mx-auto">
            <h1 className="title text-center">Our team</h1>
            <div className="mb-12">
              {
                members.map((item,index) => (
                  <div className='flex mt-[72px]' key={index}>
                    <div className="flex flex-col items-center w-[500px]">
                      <div className='bg-gray-300 rounded-full w-[120px] h-[120px] flex items-center justify-center'>
                        <IconSelector id='user' fill='white' size={['80', '80']}/>
                      </div>
                      <span className='text-secondary pt-5 font-normal  text-[20px]'>{item.name}</span>
                    </div>
                    <p className='leading-[25px] ml-5 mt-5'>
                      {item.description}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
    </>
  )
}
