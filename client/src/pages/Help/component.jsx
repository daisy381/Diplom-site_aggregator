//library
import {useState} from "react";
import cn from "classnames";

//components
import {Payment} from "./Payment";
import {Delivery} from "./Delivery";
import {Security} from "./Security";
import {Goods} from "./Goods";

import {IconSelector} from "../../shared/IconSelector";


const navButtons = [{
  title: 'Оплата',
  icon: 'wallet'
},
  {
    title: 'Доставка',
    icon: 'truck'
  },{
    title: 'Товары',
    icon: 'bag'
  },
  {
    title: 'Безопасность',
    icon: 'shield'
  }]

export const Help = () => {

  const [activeTab, setActiveTab] = useState(0)

  const onClickActive = (index) => () => setActiveTab(index)

  return (
      <div className='pb-10 bg-[#EEEEEE]'>
        <div className="flex flex-row-reverse space-x-5">
          <div className='flex flex-col bg-white h-screen min-w-[300px]'>
            {
              navButtons.map((el, index) => (
                  <div onClick={onClickActive(index)}
                       key={index}
                       className={cn('flex cursor-pointer  items-center p-5 space-x-4',
                           {'bg-secondary text-white': index === activeTab}
                       )}
                  >
                    <span className={cn('h-8 w-[2px] ', {
                      'bg-white': activeTab === index,
                      'bg-black opacity-50': activeTab !== index}
                    )}/>
                    <IconSelector id={el.icon} fill={activeTab === index ? 'white' : 'black'}/>
                    <span className='font-bold'>{el.title}</span>
                  </div>))
            }
        </div>
          {
            activeTab === 0 && <Payment/>
          }
          {
            activeTab === 1 && <Delivery/>
          }
          {
            activeTab === 2 && <Goods/>
          }
          {
            activeTab === 3 && <Security/>
          }
      </div>

  </div>)
}
