//library
import React ,{Fragment}from 'react';
import {Route, Routes, Outlet} from "react-router-dom";
import { Layout } from 'antd';


//components
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import PrivateRoute from "../../components/PrivateRoute";
import FooterComponent from "../../components/Footer";

//pages
import Products from "../Products";
import Reports from "../Reports";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NotFound from "../NotFound";
import Profile from "../Profile";

//style
import {MainContainer} from "./style";
import ProductPage from "../ProductPage";

const { Header, Footer, Sider, Content } = Layout;


function Main() {
    //for get pages with sidebar and navbar
    //TODO. connect to validation
    const Bars = ()=> {
        return <Fragment>
            <Layout>
                <Sider width={284}><Sidebar/></Sider>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height:'66px'}}><Navbar/></Header>
                    <Content style={{marginTop:66}}><Outlet/></Content>
                    <Footer style={{padding:0}}><FooterComponent/></Footer>
                </Layout>
            </Layout>
        </Fragment>
    }

    return (
            <MainContainer>
                <Routes>
                    <Route path="/" element={<Bars/>}>
                        <Route index  element={<Home/>}/>
                        <Route path="/products/category/:id" element={<PrivateRoute><Products/></PrivateRoute>}/>
                        <Route path="/reports" element={<PrivateRoute><Reports/></PrivateRoute>}/>
                        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                        <Route path="/products_page/:product" element={<PrivateRoute><ProductPage/></PrivateRoute>}/>

                    </Route>;
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                </Routes>
        </MainContainer>
    );
}

export default Main;