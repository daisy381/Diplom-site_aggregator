//library
import React from 'react';

//Style
import {
    MainContainer,
    DescriptionContainer,
    TitleContainer,
    ImgContainer,
    MainImgContainer,
    OtherImgContainer,
    SubImg1Container,
    SubImg2Container,
    SubTitleContainer,
    ContentContainer,
    LiItem
} from './style';

//Images

function AboutUsSection() {
    return (
        <MainContainer>
            <DescriptionContainer>
                <SubTitleContainer>Whats Easily?</SubTitleContainer>
                <TitleContainer>Why Join to Netbook Social Network?</TitleContainer>
                <ContentContainer>
                    Recent surveys have indicated that small businesses
                    recognise the need they have to connect with consumer
                </ContentContainer>
                <LiItem>Groups</LiItem>
                <LiItem>Messages</LiItem>
                <LiItem>Share</LiItem>
            </DescriptionContainer>
            <ImgContainer>
                <MainImgContainer/>
                <OtherImgContainer>
                    <SubImg1Container/>
                    <SubImg2Container/>
                </OtherImgContainer>
            </ImgContainer>

        </MainContainer>
    );
}

export default AboutUsSection;