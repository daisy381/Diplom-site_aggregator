//libraries
import React, {useEffect, useState, useCallback} from 'react'
import {NavLink, useNavigate} from "react-router-dom";
import {Menu} from "antd";

//components
import {SidebarConfigContainer} from "./sidebarConfigContainer";
import Icon from "../Icon";

//data
import {SidebarData} from "./SidebarData";

// utils
import { productsServices } from "../../services/products";
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
    MenuContainer
} from "./style";

//icons
import {IconContext} from "react-icons";
import LogoIcon from '../../img/components/sidebar/logo.svg';
import {AiFillHome} from "react-icons/ai";
import {IoIosPaper} from "react-icons/io";


function Sidebar(){
    const [categories, setCategories] = useState([]);
    const token = getCookie('token');
    const navigate = useNavigate();

    const handleClick = useCallback(({ key }) => {
        navigate(key);
    }, []);

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await productsServices.getCategories();
            setCategories(response.data);
        } catch (e) {
            console.error(e.message);
        }
    }

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
                    <MenuContainer
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['2']}
                        mode="inline"
                        onClick={handleClick}
                    >

                        <MenuContainer.Item key="/" icon={<AiFillHome />}>
                            Main
                        </MenuContainer.Item>
                        <MenuContainer.SubMenu
                            key="/products"
                            icon={<AiFillHome />}
                            title="Products"
                        >
                            {
                                categories.map((item) => {
                                    if (item?.sub_categories.length) {
                                        return (
                                            <MenuContainer.SubMenu
                                                key={`/products/category/${item.id}`}
                                                title={item.name}
                                                onSelect={handleClick}
                                            >
                                                {
                                                    item.sub_categories.map((sub) => (
                                                        <Menu.Item
                                                            key={`/products/category/${sub.id}`}
                                                            onSelect={handleClick}
                                                        >
                                                            {sub.name}
                                                        </Menu.Item>
                                                    ))
                                                }
                                            </MenuContainer.SubMenu>
                                        )
                                    }
                                    return (
                                        <Menu.Item
                                            key={`/products/category/${item.id}`}
                                            onSelect={handleClick}
                                        >
                                            {item.name}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </MenuContainer.SubMenu>
                        <MenuContainer.Item key="/reports" icon={<IoIosPaper />}>
                            Reports
                        </MenuContainer.Item>
                    </MenuContainer>
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