import {ContentCard} from "./ContentCard";

export const Content = ({title, items}) => {
  return <div className='w-full mt-[64px]'>
    <h1 className="title text-center">{title}</h1>
    <div className='flex justify-between flex-wrap max-w-[900px] mx-auto'>
      {items.map(item => <ContentCard {...item}/>)}
    </div>
  </div>
}
