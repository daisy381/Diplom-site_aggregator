//library
import {useState,useEffect,useCallback} from "react";

//components
import {Checkbox, Divider,Rate} from "antd";

//data
import price from './price.json';

//helpers
import {productsServices} from "../../services/products";
import {capitalizeFirstLetter} from "../../helpers/util";

export const FilterBlock = ({id,valueBrand,valuePrice,onChangePrice,onChangeBrand}) => {

    const [brands, setBrands] = useState([]);

    async function fetchData(id) {
        try {
            const response = await productsServices.getBrands(id);
            if (!response) return;

            setBrands(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect( async ()=>{
        fetchData(id)
    },[id])


    const handleChangePrice = useCallback((value) => {
        onChangePrice(value[0]);
    }, []);

    const handleChangeBrand = useCallback((value) => {
        onChangeBrand(value[0]);
    }, []);

    return (
        <div className="bg-white shadow-md p-[50px] w-[350px]">
            <h1 className="text-[30px] font-medium">Filters</h1>
            <div className="mt-10">
                <h1 className="text-[20px] mb-5">Brands</h1>
                <Checkbox.Group
                    className="flex flex-col"
                    onChange={handleChangePrice}
                    value = {valueBrand}
                >
                    {
                        brands.data?.map((item,index) => (
                            <Checkbox key={index} value={item.brand}>{ capitalizeFirstLetter(item.brand) }</Checkbox>
                        ))
                    }
                </Checkbox.Group>
            </div>
            <Divider/>

            <div className="flex flex-col space-y-2">
                <h1 className="text-[20px] mb-5">Price</h1>
                <Checkbox.Group
                    className="flex flex-col"
                    onChange={handleChangeBrand}
                    value={valuePrice}
                >
                    {
                        price.map( (item,index) => (
                            <Checkbox key={index} value={item.name}>{item['price_from']} - {item['price_to'] || "~"}</Checkbox>
                        ))
                    }
                </Checkbox.Group>
            </div>
            <Divider/>

            <div className="mt-10">
                <h1 className="text-[20px] mb-5">Rating</h1>
                <Checkbox.Group
                    className="flex flex-col"
                >
                    <Checkbox value="1"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={1}/></Checkbox>
                    <Checkbox value="2"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={2}/></Checkbox>
                    <Checkbox value="3"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={3}/></Checkbox>
                    <Checkbox value="4"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={4}/></Checkbox>
                    <Checkbox value="5"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={5}/></Checkbox>
                </Checkbox.Group>
            </div>
            <Divider/>

            <div className="mt-10">
                <h1 className="text-[20px] mb-5">Processor</h1>
                <Checkbox.Group
                    className="flex flex-col"
                >
                    <Checkbox value="E">Core i3</Checkbox>
                    <Checkbox value="A">Core i5</Checkbox>
                    <Checkbox value="B">Core i7</Checkbox>
                    <Checkbox value="C">Ryzen 5</Checkbox>
                    <Checkbox value="D">Ryzen 7</Checkbox>
                </Checkbox.Group>
            </div>
            <Divider/>

            <div className="mt-10">
                <h1 className="text-[20px] mb-5">Color</h1>
                <Checkbox.Group
                    className="flex flex-col"
                >
                    <Checkbox value="A">All</Checkbox>
                    <Checkbox value="E">Black</Checkbox>
                    <Checkbox value="B">Blue</Checkbox>
                    <Checkbox value="C">White</Checkbox>
                </Checkbox.Group>
            </div>
        </div>
    );
};
