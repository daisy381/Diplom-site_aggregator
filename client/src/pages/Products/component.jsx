//library
import {useState,useCallback,useEffect} from "react";
import { useLocation } from "react-router-dom";

//components
import { FilterBlock } from '../../components/FilterBlock';
import {BaseCard} from "../../components/Card/BaseCard";
import {Pagination} from "../../components/Pagination";

//data
import category from '../../data/categories.json';

//helpers
import {usePagination} from "../../hooks";
import {productsServices} from "../../services/products";
import cn from "classnames";
import {useAppContext} from "../../context";


export const Products = () => {

    const [activeItem, setActiveItem] = useState(0)
    const [brand, setBrand] = useState('');
    const [disabled, setDisabled] = useState('false');
    const [categories, setCategories] = useState([]);
    const [products,setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState(3);
    const {currentItems, pageNumbers, paginate, currentPage} = usePagination(9, products)


    const onClickActiveItem = (id,index) => () => {
        setActiveItem(index)
        setCategoryId(id);
    }
    const handleChangeBrand = useCallback((checked) => {
        setBrand(checked);
    }, []);

    const handleSearch = useCallback((e) => {
        setBrand('');
    }, []);

    useEffect(async () => {
        fetchData(categoryId)
    }, [categoryId]);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchData(_id) {
        try {
            const response = await productsServices.getCategory(_id);
            setProducts(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    async function fetchCategories() {
        try {
            const response = await productsServices.getCategories();
            setCategories(response.data);
        } catch (e) {
            console.error(e.message);
        }
    }

  return (
    <div className="my-[30px]">
      <div className="container max-w-[1180px] mx-auto">
          <div className="flex justify-between my-[30px]">
              {
                  category.map((item, index) => (
                      <span
                          onClick={onClickActiveItem(item.id,index)}
                          key={index}
                          className={cn('font-medium cursor-pointer', {'text-secondary pb-2 border-b-secondary border-b-4 w-auto': activeItem === index})}
                      >{item.name}</span>
                  ))
              }
          </div>
          <div className="flex space-x-[50px]">
              <FilterBlock />
              {
                  currentItems.length === 0 ?
                      <div className='flex flex-1 justify-center'>
                          <span className='h-24 animate-spin w-24 rounded-full border-l-8 border-l-secondary border-r-8 border-t-8 border-b-8 border-gray-200'/>
                      </div>
                      :
                      <div className="flex-1 grid grid-cols-3 gap-10 items-start">
                          {
                              currentItems.map((item) => (
                                  <BaseCard {...item} key={item.id}/>
                              ))
                          }
                          <div className='col-start-2 self-end'>
                              <Pagination paginate={paginate} currentPage={currentPage} pageNumbers={pageNumbers}/>
                          </div>
                      </div>
              }
          </div>
      </div>
    </div>
  );
};
