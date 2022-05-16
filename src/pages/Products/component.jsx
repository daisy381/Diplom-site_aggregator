import { FilterBlock } from '../../components/FilterBlock';
import {BaseCard} from "../../components/Card/BaseCard";
import {useAppContext} from "../../context";
import {Pagination} from "../../components/Pagination";
import {usePagination} from "../../hooks";
export const Products = () => {
  const {products} = useAppContext()
  const {currentItems, pageNumbers, paginate, currentPage} = usePagination(9, products)

  return (
    <div className="my-[70px]">
      <div className="container max-w-[1180px] mx-auto">
        <div className="flex space-x-[50px]">
          <FilterBlock />
          {currentItems.length === 0 ? <div className='flex flex-1 justify-center'>
            <span className='h-24 animate-spin w-24 rounded-full border-l-8 border-l-secondary border-r-8 border-t-8 border-b-8 border-gray-200'>
            </span>
          </div> : <div className="flex-1 grid grid-cols-3 gap-10 items-start">
            {currentItems.map((item) => (
                <BaseCard {...item} key={item.id}/>
            ))}
              <div className='col-start-2 self-end'>
                <Pagination paginate={paginate} currentPage={currentPage} pageNumbers={pageNumbers}/>
              </div>
          </div>}

        </div>
      </div>
    </div>
  );
};
