export const SmallCard = ({item}) => {
  return (
      <a href="#" className='rounded-md shadow-xl py-5 px-2 flex flex-col'>
        <h1 className='font-bold text-center text-[20px]'>{item.brand}</h1>
        <img src={item.image_url} alt="card"/>
      </a>
  )
}
