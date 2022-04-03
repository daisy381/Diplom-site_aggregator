//library
import React ,{Fragment}from 'react';
import {Route, Routes, Outlet} from "react-router-dom";

//components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

//pages
import Products from "../Products";
import Reports from "../Reports";
import Home from "../Home";
// import SignIn from "../SignIn";
// import SignUp from "../SignUp";
import NotFound from "../NotFound";

//style
import {MainContainer} from "./style";

function Main() {
    //for get pages with sidebar and navbar
    //TODO. connect to validation
    const Bars = ()=> {
        return <Fragment>
            <Sidebar/>
            <Navbar/>
            <Outlet/>
        </Fragment>
    }

    return (
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Bars/>}>
                        <Route index element={<Home/>}/>
                        <Route path="products" element={<Products/>}/>
                        <Route path="reports" element={<Reports/>}/>
                    </Route>;
                    <Route path="/*" element={<NotFound/>} />
                </Routes>
        </MainContainer>
    );
}

export default Main;