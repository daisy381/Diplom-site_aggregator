//libraries
import React from 'react'
import {NavLink} from "react-router-dom";

//components
import LogoutButton from "../LogoutButton";

//styles
import {
    LiItemContainer,
    SpanContainer} from "./style";

//icons
import AccountIcon from "../../img/components/sidebar/account.svg";
import Icon from "../Icon";
import SettingsIcon from "../../img/components/sidebar/settings.svg";

export const SidebarConfigContainer = () => {

    return (
            <>
                <LiItemContainer>
                    <NavLink to='/profile'>
                        <Icon src={AccountIcon} />
                        <SpanContainer>Profile</SpanContainer>
                    </NavLink>
                </LiItemContainer>
                <LiItemContainer>
                    <NavLink to='/settings'>
                        <Icon src={SettingsIcon} />
                        <SpanContainer>Settings</SpanContainer>
                    </NavLink>
                </LiItemContainer>
                <LogoutButton/>
            </>
    )
}