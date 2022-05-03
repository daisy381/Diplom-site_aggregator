//library
import React, {useState, useEffect, useCallback} from 'react';
import { useLocation } from "react-router-dom";
import { Divider, Image, Row,Col} from "antd";
import { Anchor } from "antd";

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
    const { pathname } = useLocation();
    const [products, setProducts] = useState({
        data: [],
        links: [],
        meta: [],
    });
    const [id, setId] = useState(null);
    const [brand, setBrand] = useState('');
    const [search, setSearch] = useState('');
    const [disabled, setDisabled] = useState('false');

    const handleChangeBrand = useCallback((checked) => {
        setSearch('');
        setBrand(checked);
    }, []);

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
        setBrand('');
    }, []);

    useEffect(() => {
        const path = pathname.split("/");

        setId(path[path.length-1]);
        fetchData(path[path.length-1]);
    }, [pathname]);

    useEffect(async () => {
        if (id === null) return;
        if (!brand && !search) {
            fetchData(id);
            return;
        }
        let response = null;
        if (brand !== '') {
            response = await productsServices.getByBrands(id, brand);
        } else if (search !== '') {
            response = await productsServices.getByText(search);
        }
        setProducts(response);
    }, [brand, search]);

    async function fetchData(_id) {
        try {
            const response = await productsServices.getCategory(_id);
            setProducts(response);
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
            <BodyContainer>
                <TitleContainer>Products > Category</TitleContainer>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Filter id={id} value={brand} onChange={handleChangeBrand} />
                    <ProductsContainer>
                        <ConfigBar>
                            <InputContainer>
                                <InputSC
                                    placeholder="Search"
                                    allowClear
                                    size="large"
                                    onChange={handleSearch}
                                />
                            </InputContainer>
                        </ConfigBar>
                        <Divider/>

                        <Row>
                            {
                                products.data.map((item) => (
                                    <Col style={{marginRight:40,marginBottom:20}} key={item.id}>
                                        <Card key={item.id}>
                                            <Image
                                                width={300}
                                                height={300}
                                                src={item.image_url}
                                            />

                                            <TitleContainer style={{ fontSize: "15px" }}>
                                                { item.name }
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
                                                Price: ₸{item.price}
                                            </PriceContainer>

                                            <ButtonContainer>Add to Cart</ButtonContainer>
                                        </Card>

                                    </Col>
                                ))
                            }
                        </Row>
                    </ProductsContainer>
                </div>
            </BodyContainer>
    );
}

export default Products;