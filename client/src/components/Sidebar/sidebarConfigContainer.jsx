//libraries
import React from 'react'
import {NavLink} from "react-router-dom";

//components

//styles
import {
    LiItemContainer,
    SpanContainer} from "./style";

//icons
import Icon from "../Icon";

import AccountIcon from "../../img/components/sidebar/account.svg";
import SettingsIcon from "../../img/components/sidebar/settings.svg";
import ECommerce from "../../img/components/sidebar/e-commerce.svg";

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
                    <NavLink to='/Basket'>
                        <Icon src={ECommerce} />
                        <SpanContainer>Basket</SpanContainer>
                    </NavLink>
                </LiItemContainer>
                <LiItemContainer>
                    <NavLink to='/settings'>
                        <Icon src={SettingsIcon} />
                        <SpanContainer>Settings</SpanContainer>
                    </NavLink>
                </LiItemContainer>
            </>
    )
}