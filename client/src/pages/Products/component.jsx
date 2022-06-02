//library
import {useState,useCallback,useEffect} from "react";

//components
import { FilterBlock } from '../../components/FilterBlock';
import {BaseCard} from "../../components/Card/BaseCard";
import {Pagination} from "../../components/Pagination";

//data
import category from '../../data/categories.json';

//helpers
import {usePagination} from "../../hooks";
import {productsServices} from "../../services/products";
import {valueDefined} from "../../helpers/util";

import cn from "classnames";
import {IconSelector} from "../../shared/IconSelector";

export const Products = () => {

    const [activeItem, setActiveItem] = useState(0);
    const [products,setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState(3);
    const [brand, setBrand] = useState('');
    const [price,setPrice] = useState([]);
    const [search, setSearch] = useState('');
    const {currentItems, pageNumbers, paginate, currentPage} = usePagination(9, products);

    const onClickActiveItem = (id,index) => () => {
        setActiveItem(index)
        setCategoryId(id);
    }
    const handleChangeBrand = useCallback((checked) => {
        setBrand(checked);
    }, []);

    const handleChangePrice = useCallback((checked) => {
        setPrice(checked);
    }, []);


    const handleSearch = useCallback((e) => {
        if (e.key === 'Enter') {
            setSearch(e.target.value);
        }
    }, []);

    async function fetchData(_id) {
        try {
            let response = await productsServices.getCategory(_id);
            setProducts(response);
            localStorage.setItem('products', JSON.stringify(response.data))
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(async () => {
        fetchData(categoryId)
    }, [categoryId]);


    useEffect( async () =>{
        let response = null;
        if(!valueDefined(brand) && !valueDefined(price)  && !valueDefined(search)){
            fetchData(categoryId)
            return;
        } else {
            if(!valueDefined(search)){
                let result = `/api/products?category_id=${categoryId}&limit=100`;
                const getBrand = valueDefined(brand) ? `&brand=${brand}` : ``;
                const getFilter = valueDefined(price) ? getQueryPrice(price) : ``;

                result += getBrand + getFilter;
                response = await productsServices.getFilter(result);
                setProducts(response)
            }else{
                response = await productsServices.getByText(search);
                setProducts(response);
            }
        }
    },[brand,price,search]);

    function getQueryPrice (price) {
        const filterPrice = price.split('-');

        if(filterPrice.length ===1){
            return `&price_from=${filterPrice[0]}`;
        }
        return `&price_from=${filterPrice[0]}&price_to=${filterPrice[1]}`
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
              <FilterBlock
                  id={categoryId}
                  valueBrand={brand}
                  valuePrice={price}
                  onChangePrice={handleChangeBrand}
                  onChangeBrand={handleChangePrice}
              />
              {
                  currentItems.length === 0 ?
                      <div className='flex flex-1 justify-center'>
                          <span className='h-24 animate-spin w-24 rounded-full border-l-8 border-l-secondary border-r-8 border-t-8 border-b-8 border-gray-200'/>
                      </div>
                      :
                      <div>
                          <div className='relative'>
                              <input className='w-full p-2 mr-10 text-black rounded-full' type="text" placeholder='Поиск' onKeyDown={handleSearch}/>
                              <span className='absolute top-2 block right-14'>
                                  <IconSelector id='search'/>
                              </span>
                          </div>
                          <div className="flex-1 grid grid-cols-3 gap-10 items-start mt-[20px]">
                              {
                                  currentItems.map((item) => (
                                      <BaseCard {...item} key={item.id} products={products}/>
                                  ))
                              }
                              <div className='col-start-2 self-end'>
                                  <Pagination paginate={paginate} currentPage={currentPage} pageNumbers={pageNumbers}/>
                              </div>
                          </div>

                      </div>
              }
          </div>
      </div>
    </div>
  );
};
