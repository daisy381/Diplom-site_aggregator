export const Box = ({title, subtitle, description}) => {
  return <div className='w-full mt-[64px] px-5'>
    <h1 className="title text-center">{title}</h1>
    <div className='bg-white p-5 mt-5 rounded'>
      <span className='font-bold text-[20px]'>{subtitle}</span>
      <p className='mt-5'>
        {description}
      </p>
    </div>
  </div>
}
