//library
import React, { useState, useEffect } from 'react';
import {Checkbox, Divider, Rate, Slider, Image, Row, Col, Button} from "antd";
import {Anchor} from "antd";

//Style
import {
    MainContainer,
    ImgContainer,
    ImgSC,
    BodyContainer,
    TitleContainer
} from "../mainStyle";

import {
    Filter,
    CheckboxContainer,
    CheckboxTitle,
    ProductsContainer,
    ConfigBar,
    InputSC,
    InputContainer,
    Card,
    DescriptionContainer,
    PriceContainer,
    DescriptionCardContainer,
    ButtonContainer
} from './style'

//Images
import bg from "../../img/pages/bg-profile.jpg";
import card_1 from "../../img/pages/Product/card-1.jpeg";
import card_2 from "../../img/pages/Product/card-2.jpeg"

import {AiFillStar} from "react-icons/ai";
import {productsServices} from "../../services/products";
import Footer from "../../components/Footer";

const { Link } = Anchor;


function Products() {
    const [products, setProducts] = useState([]);
    const [disabled, setDisabled] = useState('false');

    useEffect(() => {
        // fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await productsServices.get();
            setProducts(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return (
        <MainContainer>
            <ImgContainer>
                <ImgSC src={bg}/>
            </ImgContainer>
            <BodyContainer>
                <TitleContainer>Products</TitleContainer>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Filter>
                        <CheckboxTitle>Brand</CheckboxTitle>
                        <CheckboxContainer onChange={onChange}>
                            <Checkbox value="A">All</Checkbox>
                            <Checkbox value="B">Tesla</Checkbox>
                            <Checkbox value="C">BMW</Checkbox>
                            <Checkbox value="D">Ferrari</Checkbox>
                        </CheckboxContainer>
                        <Divider/>

                        <CheckboxTitle>Colour</CheckboxTitle>
                        <CheckboxContainer onChange={onChange}>
                            <Checkbox value="A">All</Checkbox>
                            <Checkbox value="E">Black</Checkbox>
                            <Checkbox value="B">Blue</Checkbox>
                            <Checkbox value="C">White</Checkbox>
                        </CheckboxContainer>
                        <Divider/>

                        <CheckboxTitle>Price</CheckboxTitle>
                        <Slider defaultValue={30}/>
                        <Divider/>

                        <CheckboxTitle>Year</CheckboxTitle>
                        <CheckboxContainer onChange={onChange}>
                            <Checkbox value="E">All</Checkbox>
                            <Checkbox value="A">2022</Checkbox>
                            <Checkbox value="B">2021</Checkbox>
                            <Checkbox value="C">2020</Checkbox>
                        </CheckboxContainer>
                        <Divider/>

                        <CheckboxTitle>Rate</CheckboxTitle>
                        <CheckboxContainer onChange={onChange}>
                            <Checkbox value="G">All</Checkbox>
                            <Checkbox value="A"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={1}/></Checkbox>
                            <Checkbox value="B"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={2}/></Checkbox>
                            <Checkbox value="C"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={3}/></Checkbox>
                            <Checkbox value="D"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={4}/></Checkbox>
                            <Checkbox value="E"><Rate style={{display:'inherit',fontSize:14}} disabled defaultValue={5}/></Checkbox>
                        </CheckboxContainer>
                        <Divider/>
                    </Filter>
                    <ProductsContainer>
                        <ConfigBar>
                            <InputContainer>
                                <InputSC placeholder="Search"
                                         allowClear
                                         size="large"/>
                            </InputContainer>
                        </ConfigBar>
                        <Divider/>

                        <Row>
                            {
                                products.map((item) => (
                                    <Card>
                                        <Image
                                            width={300}
                                            height={300}
                                            src={item.img}
                                        />

                                        <TitleContainer>
                                            { item.title }
                                        </TitleContainer>

                                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                            <AiFillStar size={20}/>
                                            <DescriptionContainer>{item.description}</DescriptionContainer>
                                            <Anchor affix={false}>
                                                <Link href={`/products/${item.id}`} title="Details..." />
                                            </Anchor>
                                        </div>

                                        <DescriptionCardContainer>
                                            STARTING MSRP
                                        </DescriptionCardContainer>
                                        <PriceContainer>
                                            Price: ${item.cost}
                                        </PriceContainer>

                                        <ButtonContainer>Add to Cart</ButtonContainer>
                                    </Card>
                                ))
                            }
                        </Row>
                    </ProductsContainer>
                </div>
            </BodyContainer>
            <Footer/>

        </MainContainer>
    );
}

export default Products;