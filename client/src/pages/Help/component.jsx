import {IconSelector} from "../../shared/IconSelector";
import {useState} from "react";
import cn from "classnames";
import {Content} from "./Content";
import {Box} from "./Box";

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
  return <div className='h-screen bg-[#EEEEEE]'>

      <div className="flex flex-row-reverse space-x-5">
        <div className='flex flex-col bg-white h-screen min-w-[300px]'>
          {navButtons.map((el, index) => (
              <div onClick={onClickActive(index)} key={index} className={cn('flex cursor-pointer  items-center p-5 space-x-4', {
                'bg-secondary text-white': index === activeTab
              })}>
                <span className={cn('h-8 w-[2px] ', {
                  'bg-white': activeTab === index,
                  'bg-black opacity-50': activeTab !== index
                })}/>
                <IconSelector id={el.icon} fill={activeTab === index ? 'white' : 'black'}/>
                <span className='font-bold'>{el.title}</span>
              </div>
          ))}
        </div>
        {activeTab === 0 && <Box title={'Оплата'} subtitle={'Способы доставка'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consequuntur dolor dolorem illum impedit labore magnam maxime mollitia nam nemo odit repellendus repudiandae saepe ullam. Dolorem eveniet fugiat itaque laboriosam quis temporibus voluptatibus! Cumque esse explicabo natus! Assumenda cumque facilis, iste iusto nobis recusandae reiciendis veniam! Facilis, provident tempora!'}/>}
        {activeTab === 1 && <Box title={'Доставка'} subtitle={'Типы доставка'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consequuntur dolor dolorem illum impedit labore magnam maxime mollitia nam nemo odit repellendus repudiandae saepe ullam. Dolorem eveniet fugiat itaque laboriosam quis temporibus voluptatibus! Cumque esse explicabo natus! Assumenda cumque facilis, iste iusto nobis recusandae reiciendis veniam! Facilis, provident tempora!'}/>}
        {activeTab === 2 && <Content title={'Товары'} items={[
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '}
        ]}/>}
        {activeTab === 3 && <Content title={'Безопасность'} items={[
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '},
          {title: 'Текст', description: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст  текст текст текст текст текст текст текст текст текст текст '}
        ]}/>}
      </div>

  </div>
}
