//library
import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'
//utils
import { deleteCookie, getCookie } from '../../helpers/util';

//styles
import {
    NavbarContainer,
    InputSC,
    InputContainer,
    ButtonContainer,
    AvatarSC,
    NavbarItemContainer,
    LiItemContainer,
    NavbarBeforeLoginContainer
} from "./style";

import "antd/dist/antd.min.css";

//images
import Icon from "../Icon";
import NotificationIcon from "../../img/components/navbar/notification.svg";
import MessageIcon from "../../img/components/navbar/message.svg";

function Navbar(){
    const token = getCookie('token');
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            {
                location.pathname !== '/'
                ? (
                    <NavbarContainer>
                        <InputContainer>
                            <InputSC placeholder="Search"
                                     allowClear
                                     enterButton="Search"
                                     size="large"/>
                        </InputContainer>
                        <NavbarItemContainer>
                            {
                                !token
                                ? (
                                    <LiItemContainer>
                                        <ButtonContainer
                                            onClick={() => navigate('/signin')}>
                                            Log In
                                        </ButtonContainer>
                                    </LiItemContainer>
                                )
                                : (
                                    <LiItemContainer>
                                        <ButtonContainer
                                            onClick={() => deleteCookie('token')}>
                                            Log Out
                                        </ButtonContainer>
                                        <Icon style={{marginLeft:20}} src={NotificationIcon} width={24} height={24}/>
                                        <Icon style={{marginLeft:20}} src={MessageIcon} width={24} height={24}/>
                                        <AvatarSC>U</AvatarSC>
                                    </LiItemContainer>
                                )
                            }
                        </NavbarItemContainer>
                    </NavbarContainer>
                )
                : (
                    <NavbarBeforeLoginContainer>
                        <InputContainer>
                            <InputSC placeholder="Search"
                                     allowClear
                                     enterButton="Search"
                                     size="large"/>
                        </InputContainer>
                        <ButtonContainer
                            type="primary"
                            onClick={() => navigate('/signin')}>
                            Log In
                        </ButtonContainer>
                    </NavbarBeforeLoginContainer>
                )
            }
        </>

    );
}

export default Navbar;