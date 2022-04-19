//library
import React from 'react';
import Icon from "../../../components/Icon";
import {Avatar,Tooltip} from "antd";

//Style
import {
    MainContainer,
    CardContainer,
    DescriptionContainer,
    TitleContainer,
    TextContainer,
    TextBodyContainer,
    DescTitleContainer,
    MemberContainer,
    CardButtonContainer
} from "./style";

import {ContentContainer, SubTitleContainer} from "../AboutUsSection/style";


//Images
import star_icon from '../../../img/pages/Home/star-icon.png';
import trophy_icon from '../../../img/pages/Home/trophy-icon.svg';
import github_icon from '../../../img/pages/Home/github_iconn.svg'
import {UserOutlined,AntDesignOutlined,ArrowRightOutlined} from '@ant-design/icons'
import {ButtonContainer} from "../../mainStyle";

function AchievementSection() {
    return (
        <MainContainer>
            <CardContainer>
                <TitleContainer>
                    <Icon src={star_icon} width={24} height={24}/>
                    <TextContainer>4.8 Rating</TextContainer>
                </TitleContainer>
                <TitleContainer>
                    <Avatar.Group>
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Tooltip title="Ant User" placement="top">
                            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        </Tooltip>
                        <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                    <MemberContainer><span style={{color:'#217BF4'}}>+836k</span> Members</MemberContainer>
                </TitleContainer>
                <TextBodyContainer>
                    More than 2 billion we people over countries use socibooks
                    we to stay in touch with friends.
                </TextBodyContainer>
                <CardButtonContainer>Join our Community <ArrowRightOutlined/></CardButtonContainer>
            </CardContainer>
            <CardContainer>
                <TitleContainer>
                    <Icon src={trophy_icon} width={24} height={24}/>
                    <TextContainer>Awards</TextContainer>
                </TitleContainer>
                <TitleContainer>
                    <Avatar style={{ backgroundColor: '#f56a00' }}>G</Avatar>
                    <MemberContainer>Best of <span style={{color:'#217BF4'}}>2021</span> on Github</MemberContainer>
                </TitleContainer>
                <TextBodyContainer>
                    More than 2 billion we people over countries use socibooks
                    we to stay in touch with friends.
                </TextBodyContainer>
                <CardButtonContainer>Go to Awards<ArrowRightOutlined/></CardButtonContainer>
            </CardContainer>
            <DescriptionContainer>
                <SubTitleContainer>Our Achievement</SubTitleContainer>
                <DescTitleContainer>We are Connecting You The Digital Life.</DescTitleContainer>
                <ContentContainer>
                    The scope the Social Media becomes crucial Is helps
                    the business to directly engage with their needs and wants.
                </ContentContainer>
                <ButtonContainer>Discover me <ArrowRightOutlined/> </ButtonContainer>

            </DescriptionContainer>

        </MainContainer>
    );
}

export default AchievementSection;