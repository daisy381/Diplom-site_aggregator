//library
import {useState} from "react";
import cn from "classnames";

//components
import {Content} from "./Content";
import {Box} from "./Box";
import {IconSelector} from "../../shared/IconSelector";

//data
import tabsdata from "../../data/tabsData.json";


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
      <div className='h-screen bg-[#EEEEEE]'>
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
            activeTab === 0 && <Box title={tabsdata[0].title} subtitle={tabsdata[0].subtitle} description={tabsdata[0].description}/>
          }
          {
            activeTab === 1 && <Box title={tabsdata[1].title} subtitle={tabsdata[1].subtitle} description={tabsdata[1].description}/>
          }
          {
            activeTab === 2 && <Content title={'Товары'} items={[
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '}
            ]}/>
          }
          {
            activeTab === 3 && <Content title={'Безопасность'} items={[
                {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
              {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '}
            ]}/>
          }
      </div>

  </div>)
}
