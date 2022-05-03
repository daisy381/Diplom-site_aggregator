//library
import React from 'react';
import { Divider, Image, Rate, Tag} from "antd";

//style
import {
    ProductDetails,
    ProductImages,
    ProductMainImage,
    ProductOtherImages,
    ProductDescription,
    ProductDescriptionTitle,
    DescriptionContainer,
    ButtonContainer,
    BodyContainer
} from "./style";

import {
    MainContainer,
    ImgContainer,
    ImgSC,
    TitleContainer
} from "../mainStyle";


//Images
import bg from "../../img/pages/bg-profile.jpg";
import Product_main from '../../img/pages/Product/8abf9647-3083-11eb-a237-005056b6dbd7.jpeg'
import Product_1 from '../../img/pages/Product/9926ea98-3b43-11ea-a22d-005056b6dbd7.jpeg'
import Product_2 from '../../img/pages/Product/8abf9647-3083-11eb-a237-005056b6dbd7.jpeg'
import Product_3 from '../../img/pages/Product/e9a13308-993c-11ec-a244-005056b6dbd7.jpeg'
import Product_4 from '../../img/pages/Product/product_details_4.jpg'
import Tabs from "../../components/Tabs";



function ProductPage() {
    return (
        <MainContainer>
            <ImgContainer>
                <ImgSC src={bg}/>
            </ImgContainer>
            <BodyContainer>
                <TitleContainer>Product 1</TitleContainer>
                <ProductDetails>
                    <ProductImages>
                        <ProductMainImage>
                            <Image width={430} height={385}  style={{borderRadius:8}} src={Product_main}/>
                        </ProductMainImage>

                        <ProductOtherImages>
                            <Image width={90} height={90}  style={{borderRadius:8}} src={Product_1}/>
                            <Image width={90} height={90}  style={{borderRadius:8}} src={Product_2}/>
                            <Image width={90} height={90}  style={{borderRadius:8}} src={Product_3}/>
                            <Image width={90} height={90}  style={{borderRadius:8}} src={Product_4}/>
                        </ProductOtherImages>
                    </ProductImages>
                    <ProductDescription>
                        <ProductDescriptionTitle>
                            Apple MacBook Pro 16
                        </ProductDescriptionTitle>
                        <Rate allowHalf defaultValue={2.5} />
                        <Divider/>
                        <TitleContainer>
                            Price : $1,419
                        </TitleContainer>
                        <Tag style={{width:60, marginBottom:20}} color="green">In Stock</Tag>
                        <DescriptionContainer>
                            Description
                            <ul style={{paddingLeft:30}}>
                                <li>The most beautiful curves of this swivel stool adds an
                                    elegant touch to any environment
                                </li>
                                <li>Memory swivel seat returns to original seat position</li>
                                <li>Comfortable integrated layered chair seat cushion design</li>
                                <li>Fully assembled! No assembly required</li>
                            </ul>
                        </DescriptionContainer>
                        <ButtonContainer>
                            Add to Cart
                        </ButtonContainer>
                    </ProductDescription>
                </ProductDetails>
                <Divider/>
                <Tabs/>
            </BodyContainer>
        </MainContainer>
    );
}

export default ProductPage;