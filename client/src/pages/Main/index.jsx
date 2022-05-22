//library
import React ,{Fragment}from 'react';
import {Route, Routes} from "react-router-dom";
import { Layout } from 'antd';

//components
import PrivateRoute from "../../components/PrivateRoute";

//pages
import {MainLayout} from "../../components/Layout/MainLayout";
import {Home} from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NotFound from "../NotFound";
import {Cart} from "../Cart";
import {Favorites} from "../Favorites";
import {ProductInfo} from "../ProductInfo";
import {Products} from "../Products";
import {Orders} from "../Orders";
import {Reports} from "../Reports";
import {Profile} from "../Profile";

//style

const { Header, Footer, Sider, Content } = Layout;


function Main() {

    return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index  element={<Home/>}/>
                        <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
                        <Route path="/reports" element={<PrivateRoute><Reports/></PrivateRoute>}/>
                        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                        <Route path="/products/:product" element={<PrivateRoute><ProductInfo/></PrivateRoute>}/>
                        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
                        <Route path="/favorites" element={<PrivateRoute><Favorites/></PrivateRoute>}/>
                        <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>}/>
                    </Route>;
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                </Routes>
        </Fragment>
    );
}

export default Main;