import React, {useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./components/Layout/MainLayout";
import {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import {AppProvider} from "./context";
import {ProductInfo} from "./pages/ProductInfo";
import {Profile} from "./pages/Profile";
import {Cart} from "./pages/Cart";
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";
import {Reports} from "./pages/Reports";
const App = () => {

  return <AppProvider>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='product/:productId' element={<ProductInfo/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='favorites' element={<Favorites/>}/>
          <Route path='orders' element={<Orders/>} />
          <Route path='reports' element={<Reports/>}/>
        </Route>
    </Routes>
  </AppProvider>
}

export default App
