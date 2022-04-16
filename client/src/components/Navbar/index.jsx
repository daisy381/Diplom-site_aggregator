//library
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

//styles
import {
    NavbarContainer,
    InputSC,
    InputContainer,
    ButtonContainer,
    AvatarSC,
    NavbarItemContainer,
    LiItemContainer
} from "./style";
import "antd/dist/antd.min.css";
import Icon from "../Icon";
import NotificationIcon from "../../img/components/navbar/notification.svg";
import MessageIcon from "../../img/components/navbar/message.svg";

function Navbar(){
    const {isAuthenticated,loginWithRedirect,logout} = useAuth0()

    return (
        <NavbarContainer>
            <InputContainer>
                <InputSC placeholder="Search"
                         allowClear
                         enterButton="Search"
                         size="large"/>
            </InputContainer>
            <NavbarItemContainer>
                {
                    !isAuthenticated && (
                        <LiItemContainer>
                            <ButtonContainer
                                onClick={loginWithRedirect}>
                                Log In
                            </ButtonContainer>
                        </LiItemContainer>
                    )
                }
                {
                    isAuthenticated && (
                        <LiItemContainer>
                            <ButtonContainer
                                onClick={()=> logout()}>
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
    );
}

export default Navbar;