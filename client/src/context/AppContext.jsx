import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext({
  setProducts: () => {},
  products: [],
  cartProducts: [],
  setCartProducts: () => {},
  favorites: [],
  setFavorites: () => {},
  hasCart: {},
  setModal: () => {},
  modal: {},
  clearItemsOnCart: () => {},
  addToOrders: () => {},
})

export const AppProvider = ({children}) => {

  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [modal, setModal] = useState({isShow: false, title: '', description: ''})
  const [orders, setOrders] = useState([]);

  const hasCart = (id) => cartProducts.find(el => el.id === id)

  const clearItemsOnCart = () => {
    setCartProducts([])
    localStorage.removeItem('cartItems')
  }

  const addToOrders = (value) => {
    setOrders(prev => [...prev, value]);
  }

  useEffect(() => {
    const itemsOnCart = JSON.parse(localStorage.getItem('cartItems'))
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
    localStorage.setItem('location','almaty');


    if (itemsOnCart) {
      setCartProducts(prev => itemsOnCart)
    }
    if (favoriteItems) {
      setFavorites(favoriteItems)
    }
  }, [])

  return (
      <AppContext.Provider
          value={
            { products,
              modal,
              setModal,
              clearItemsOnCart,
              hasCart,
              setProducts,
              cartProducts,
              setCartProducts,
              favorites,
              setFavorites,
              addToOrders,
              orders,
              setOrders,
            }
          }>
        {children}
      </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const items = useContext(AppContext)

  return {...items}
}
