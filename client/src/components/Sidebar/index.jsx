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
        // fetchCategories();
    }, []);

    async function fetchCategories() {
        try {
            const response = await productsServices.getCategories();
            setCategories(response);
        } catch (e) {
            console.error(e.message);
        }
    };

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
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['2']}
                        mode="inline"
                        onClick={handleClick}
                    >

                        <Menu.Item key="/" icon={<AiFillHome />}>
                            Main
                        </Menu.Item>
                        <Menu.SubMenu key="/products" icon={<AiFillHome />} title="Products" onTitleClick={handleClick}>
                            {
                                categories.map((item) => (
                                    <Menu.Item key={item}>{item}</Menu.Item>
                                ))
                            }
                        </Menu.SubMenu>
                        <Menu.Item key="/reports" icon={<IoIosPaper />}>
                            Reports
                        </Menu.Item>
                    </Menu>
                    <HrContainer/>
                    {/*{*/}
                    {/*    token && (*/}
                            <SidebarConfigContainer/>
                    {/*    )*/}
                    {/*}*/}
                </UlContainer>
            </SideContainer>
        </IconContext.Provider>
    )
}


export default Sidebar