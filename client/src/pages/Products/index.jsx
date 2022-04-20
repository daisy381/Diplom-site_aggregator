//library
import React, { useState, useEffect } from 'react';
import { Divider, Image, Row} from "antd";
import {Anchor} from "antd";

//components
import Filter from "../../components/Filter";

//Style
import {
    MainContainer,
    BodyContainer,
} from "../mainStyle";

import {
    TitleContainer,
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

import {AiFillStar} from "react-icons/ai";
import {productsServices} from "../../services/products";

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

    return (
            <BodyContainer>
                <TitleContainer>Products > Category</TitleContainer>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Filter/>
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
    );
}

export default Products;