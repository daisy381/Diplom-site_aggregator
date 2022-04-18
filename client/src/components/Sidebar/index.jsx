//libraries
import React from 'react'
import {NavLink} from "react-router-dom";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

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

const { SubMenu } = Menu;

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
                    <Menu
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
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
                    </Menu>
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