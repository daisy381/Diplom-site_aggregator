//library
import React, {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'

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
} from "./style";

import "antd/dist/antd.min.css";
import "../../index.css";

//images
import Icon from "../Icon";
import NotificationIcon from "../../img/components/navbar/notification.svg";
import MessageIcon from "../../img/components/navbar/message.svg";

function Navbar(){
    const token = getCookie('token');
    const navigate = useNavigate();

    const logout = ()=>{
        deleteCookie('token')
        navigate('/signin')
    }
    return (
        <>
            {
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
                                            onClick={() => logout()}>
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
            }
        </>

    );
}

export default Navbar;