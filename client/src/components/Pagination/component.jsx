import cn from 'classnames';

export const Pagination = ({pageNumbers, paginate, currentPage}) => {

  return <div className='flex items-center font-medium text-[15px] space-x-2 justify-center'>
    <button onClick={() => paginate(currentPage - 1)} className='font-medium'> Назад </button>
    <ul className='flex'>
      {pageNumbers.map(number => <li className={
        cn('list-none cursor-pointer flex items-center justify-center  w-[40px] h-[40px]', {
          'bg-secondary rounded-full text-white': currentPage === number
        })
      } onClick={() => paginate(number)}>{number}</li>)}
    </ul>
    <button onClick={() => paginate(currentPage + 1)} className='font-medium'> Вперед </button>
  </div>
}
