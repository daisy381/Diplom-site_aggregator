export const ContentCard = ({title, description}) => {
  return  <div className='max-w-[400px] flex-col mt-5 bg-white p-5 rounded'>
    <h1 className="text-secondary font-bold text-[30px]">{title}</h1>
    <p className='text-[16px] mt-5'>
      {description}
    </p>
  </div>
}
