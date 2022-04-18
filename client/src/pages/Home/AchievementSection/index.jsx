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
    TextBodyContainer
} from "./style";

//Images
import star_icon from '../../../img/pages/Home/star-icon.png'
import {UserOutlined,AntDesignOutlined} from '@ant-design/icons'

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
                    <TextBodyContainer>+836k Members</TextBodyContainer>
                </TitleContainer>
            </CardContainer>
            <CardContainer></CardContainer>
            <DescriptionContainer></DescriptionContainer>

        </MainContainer>
    );
}

export default AchievementSection;