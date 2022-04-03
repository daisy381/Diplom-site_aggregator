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
    NavbarItemContainer
} from "./style";
import "antd/dist/antd.min.css";
import {LiItemContainer} from "../Sidebar/style";


function Navbar(){
    const {isAuthenticated,loginWithRedirect} = useAuth0()


    return (
        <NavbarContainer>
            <InputContainer>
                <InputSC placeholder="Search"
                         allowClear
                         enterButton="Search"
                         size="large"/>
            </InputContainer>
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
            <NavbarItemContainer>
                <AvatarSC>U</AvatarSC>
            </NavbarItemContainer>
        </NavbarContainer>
    );
}

export default Navbar;