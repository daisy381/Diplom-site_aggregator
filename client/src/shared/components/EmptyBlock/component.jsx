import {IconSelector} from "../../IconSelector";

export const EmptyBlock = ({title, iconId, description}) => {
  return <div className='h-screen flex justify-center items-center'>
    <div className='flex flex-col items-center'>
      <IconSelector id={iconId} fill={'#000'} size={[110, 110]}/>
      <h1 className='mt-[20px] text-[30px] font-bold uppercase'>{title}</h1>
      <div className='mt-[34px] relative'>
        <input className='rounded-full p-2 placeholder:text-black  background: bg-[#2F89CE]' type="text" placeholder='Поиск'/>
        <span className='absolute top-2 block right-5'>
            <IconSelector id='search'/>
          </span>
      </div>
      <span className='inline-block mt-5 font-medium'>
        {description}
      </span>
    </div>
  </div>
}
