//libraries
import React from 'react'
import {NavLink} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

//components
import {SidebarConfigContainer} from "./sidebarConfigContainer";

//data
import {SidebarData} from "./SidebarData";

// utils
import { getCookie } from '../../helpers/util';

//styles
import {
    SideContainer,
    UlContainer,
    LogoContainer,
    LiItemContainer,
    LogoTitle,
    LinkContainer,
    SpanContainer,
    HrContainer,
} from "./style";

//icons
import {IconContext} from "react-icons";
import LogoIcon from '../../img/components/sidebar/logo.svg';
import Icon from "../Icon";


function Sidebar(){
    const token = getCookie('token');

    return (
        <IconContext.Provider value={{ color: '#000' }}>
            <SideContainer>
                <UlContainer>
                    <LogoContainer>
                        <LinkContainer to="#">
                            <Icon path={LogoIcon} width={40} height={40}/>
                            <LogoTitle>{"Easily"}</LogoTitle>
                        </LinkContainer>
                    </LogoContainer>
                    {
                        SidebarData.map((item,index)=> {
                            return (
                                <LiItemContainer key={index}>
                                    <NavLink to={item.path}
                                    >
                                        {item.icon}
                                        <SpanContainer>{item.title}</SpanContainer>
                                    </NavLink>
                                </LiItemContainer>
                            )
                        })
                    }
                    <HrContainer/>
                    {
                        token && (
                            <SidebarConfigContainer/>
                        )
                    }
                </UlContainer>
            </SideContainer>
        </IconContext.Provider>
    )
}


export default Sidebar