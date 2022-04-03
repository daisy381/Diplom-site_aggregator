import React from 'react';

//icons
import {IoIosPaper, IoMdPeople} from "react-icons/io";
import { FaCartPlus} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import SettingsIcon from "../../img/components/sidebar/settings.svg";
import AccountIcon from "../../img/components/sidebar/account.svg";
import Icon from "../Icon";

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiFillHome/>
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIosPaper/>
    },
    {
        title:'Products',
        path:'/products',
        icon: <FaCartPlus/>
    },
    {
        title:'Not Found',
        path:'/*',
        icon:<IoMdPeople/>
    }
];