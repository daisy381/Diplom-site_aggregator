//library
import React from 'react';
import {Card,Divider} from "antd";

//style
import {
    ImgContainer,
    ProfileContentDesc,
    ImgSC,
    AvatarSC,
    AvatarContainer,
    AvatarContainerInfo,
    AvatarContainerName,
    AvatarContainerPosition,
    PrfileDesc,
    ProfileDescInform,
    ProfileDescInformTitle,
    ProfileDescInformText,
    ProfileDescItem,
    TitleContainer,
    DescContainer,
    ProfileProducts,
    BoughtProducts
} from "./style";

//images
import bg from '../../img/pages/bg-profile.jpg'
import avatar from '../../img/pages/Profile/avatar.jpg'
import {BodyContainer, MainContainer} from "../mainStyle";


function Profile() {
    return (
        <MainContainer>
            <ImgContainer>
                <ImgSC src={bg}/>
            </ImgContainer>
            <BodyContainer>
                <ProfileContentDesc>
                    <div style={{margin:'10px 0 0 30px'}}>
                        <AvatarContainer>
                          <AvatarSC src={avatar}/>
                          <AvatarContainerInfo>
                             <AvatarContainerName>
                                 Islam Duisenbek
                                </AvatarContainerName>
                                <AvatarContainerPosition>
                                    Web / React developer
                                </AvatarContainerPosition>
                            </AvatarContainerInfo>
                        </AvatarContainer>
                        <PrfileDesc>
                            <ProfileDescInform>
                                <ProfileDescInformTitle>
                                    Profile Information
                                </ProfileDescInformTitle>
                                <ProfileDescInformText>
                                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                                    If two equally difficult paths, choose the one more painful in the
                                 short term (pain avoidance is creating an illusion of equality).
                                </ProfileDescInformText>
                                <Divider/>
                                <ProfileDescItem>
                                    <TitleContainer>Full Name:</TitleContainer>
                                    <DescContainer>Duisenbek Islam</DescContainer>
                                </ProfileDescItem>
                                <ProfileDescItem>
                                    <TitleContainer>Mobile:</TitleContainer>
                                    <DescContainer>+7 (700) 515 12 01</DescContainer>
                                </ProfileDescItem>
                                <ProfileDescItem>
                                    <TitleContainer>Email:</TitleContainer>
                                    <DescContainer>duisenbekislam@gmail.com</DescContainer>
                                </ProfileDescItem>
                                <ProfileDescItem>
                                    <TitleContainer>Location:</TitleContainer>
                                    <DescContainer>KZ</DescContainer>
                                </ProfileDescItem>
                            </ProfileDescInform>
                        </PrfileDesc>
                    </div>
                    <ProfileProducts>
                        <ProfileDescInformTitle>
                            Products
                        </ProfileDescInformTitle>
                        <BoughtProducts>
                            <Card
                                hoverable
                                style={{ width: 350 }}
                                bodyStyle={{height:60}}

                                cover={<img alt="example" height={200} src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg" />}
                            >
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <TitleContainer>Product #1</TitleContainer>
                                    <TitleContainer>Price : 123$</TitleContainer>
                                </div>
                            </Card>
                        </BoughtProducts>
                        <Divider/>
                        <BoughtProducts>
                            <Card
                                hoverable
                                style={{ width: 350}}
                                bodyStyle={{height:60}}
                                cover={<img alt="example" src="https://demos.creative-tim.com/material-dashboard-pro-react/static/media/home-decor-2.b4e5397c9846645ba275.jpg" />}
                            >
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                    <TitleContainer>Product #2</TitleContainer>
                                    <TitleContainer>Price : 121$</TitleContainer>
                                </div>
                            </Card>
                        </BoughtProducts>
                    </ProfileProducts>
                </ProfileContentDesc>
            </BodyContainer>
        </MainContainer>
    );
}

export default Profile;