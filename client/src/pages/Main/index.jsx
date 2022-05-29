//library
import React ,{Fragment}from 'react';
import {Route, Routes} from "react-router-dom";

//components
import PrivateRoute from "../../components/PrivateRoute";
import {AppProvider} from "../../context";

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
import {Feedback} from "../Feedback";
import {PickupPoint} from "../PickupPoint";
import {Help} from "../Help";

function Main() {

    return (
            <AppProvider>
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index  element={<Home/>}/>
                        <Route path="/products" element={<PrivateRoute><Products/></PrivateRoute>}/>
                        <Route path="/reports" element={<PrivateRoute><Reports/></PrivateRoute>}/>
                        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                        <Route path="/product/:productId" element={<PrivateRoute><ProductInfo/></PrivateRoute>}/>
                        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
                        <Route path="/favorites" element={<PrivateRoute><Favorites/></PrivateRoute>}/>
                        <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>}/>
                        <Route path='/feedback' element={<PrivateRoute><Feedback/></PrivateRoute>}/>
                        <Route path='/pickup-point' element={<PrivateRoute><PickupPoint/></PrivateRoute>}/>
                        <Route path='/help' element={<PrivateRoute><Help/></PrivateRoute>}/>
                    </Route>;
                    <Route path="/*" element={<NotFound/>} />
                    <Route path="signup" element={<SignUp/>}/>
                    <Route path="signin" element={<SignIn/>}/>
                </Routes>
        </AppProvider>
    );
}

export default Main;
