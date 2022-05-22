//library
import {useState,useEffect,useCallback} from "react";

//components
import {Checkbox, Divider,Rate} from "antd";

//helpers
import {productsServices} from "../../services/products";
import {capitalizeFirstLetter} from "../../helpers/util";

export const FilterBlock = ({id,value,onChange}) => {

  const [brands, setBrands] = useState([]);

  useEffect( async ()=>{
    fetchData(id)
  },[id])

  const handleChange = useCallback((values) => {
    onChange(values[0]);
  }, []);

  async function fetchData(id) {
    try {
      const response = await productsServices.getBrands(id);
      if (!response.data) return;

      setBrands(response.data);
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
      <div className="bg-white shadow-md p-[50px]">
        <h1 className="text-[30px] font-medium">Filters</h1>
        <div className="mt-10">
          <h1 className="text-[20px] mb-5">Brands</h1>
          <Checkbox.Group
              className="flex flex-col"
              onChange={handleChange}
              value = {value}
          >
            {
              brands.map((item) => (
                  <Checkbox key={item} value={item}>{ capitalizeFirstLetter(item) }</Checkbox>
              ))
            }
          </Checkbox.Group>
        </div>
        <Divider/>

        <div className="flex flex-col space-y-2">
          <h1 className="text-[20px] mb-5">Price</h1>
          <Checkbox.Group
              className="flex flex-col"
              onChange={onChange}
              value = {value}
          >
            <Checkbox value="A">50 0000 - 99 999</Checkbox>
            <Checkbox value="B">100 000 - 149 999</Checkbox>
            <Checkbox value="C">150 000 - 199 999</Checkbox>
            <Checkbox value="D">200 000 - 499 999</Checkbox>
            <Checkbox value="D">from 499 999</Checkbox>
          </Checkbox.Group>

        </div>

        <div className="mt-10">
          <h1 className="text-[20px] mb-5">Processor</h1>
          <Checkbox.Group
              className="flex flex-col"
              onChange={onChange}>
            <Checkbox value="E">Core i3</Checkbox>
            <Checkbox value="A">Core i5</Checkbox>
            <Checkbox value="B">Core i7</Checkbox>
            <Checkbox value="C">Ryzen 5</Checkbox>
            <Checkbox value="D">Ryzen 7</Checkbox>

          </Checkbox.Group>
        </div>

        <div className="mt-10">
          <h1 className="text-[20px] mb-5">Color</h1>
          <Checkbox.Group
              className="flex flex-col"
              onChange={onChange}>
            <Checkbox value="A">All</Checkbox>
            <Checkbox value="E">Black</Checkbox>
            <Checkbox value="B">Blue</Checkbox>
            <Checkbox value="C">White</Checkbox>
          </Checkbox.Group>
        </div>

        <div className="mt-10">
          <h1 className="text-[20px] mb-5">Rating</h1>
          <Checkbox.Group
              className="flex flex-col"
              onChange={onChange}>
            <Checkbox value="G">All</Checkbox>
            <Checkbox value="A"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={1}/></Checkbox>
            <Checkbox value="B"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={2}/></Checkbox>
            <Checkbox value="C"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={3}/></Checkbox>
            <Checkbox value="D"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={4}/></Checkbox>
            <Checkbox value="E"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={5}/></Checkbox>
          </Checkbox.Group>
        </div>
    </div>
  );
};
