//library
import React from 'react';
import {Avatar} from "antd";

//Style
import {
    MainContainer,
    TitleContainer,
    LogoContainer,
    IconsContainer
} from "./style";
import Icon from "../Icon";
import {LinkContainer, LogoTitle} from "../Sidebar/style";

//Images
import LogoIcon from "../../img/easily.svg";
import twitter from '../../img/components/footer/Twitter.svg';
import instagram from '../../img/components/footer/instagram.svg';
import facebook from '../../img/components/footer/facebook.svg';
import linkedin from '../../img/components/footer/Linkedin.svg';



function Footer() {
    return (
        <MainContainer>
            <TitleContainer>IITU Creative Agency</TitleContainer>
            <LogoContainer>
                <LinkContainer to="#">
                    <Icon path={LogoIcon} width={40} height={40}/>
                    <LogoTitle>{"Easily"}</LogoTitle>
                </LinkContainer>
            </LogoContainer>
            <IconsContainer>
                <Avatar src={twitter}/>
                <Avatar src={instagram}/>
                <Avatar src={facebook}/>
                <Avatar src={linkedin}/>
            </IconsContainer>
        </MainContainer>
    );
}

export default Footer;