import React from 'react';

//icons
import {IoIosPaper, IoMdPeople} from "react-icons/io";
import { FaCartPlus} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";

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
        title:'Sign in',
        path:'/signin',
        icon:<IoMdPeople/>
    },
    {
        title:'Sign up',
        path:'/signup',
        icon:<IoMdPeople/>
    },
    {
        title:'Not Found',
        path:'/*',
        icon:<IoMdPeople/>
    }
];