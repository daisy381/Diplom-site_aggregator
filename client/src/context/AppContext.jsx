import {createContext, useContext, useEffect, useState} from "react";
import {fakeApi} from "../services";

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
  clearItemsOnCart: () => {}
})

export const AppProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [cartProducts, setCartProducts] = useState([])
  const [favorites, setFavorites] = useState([])
  const [modal, setModal] = useState({isShow: false, title: '', description: ''})

  const hasCart = (id) => cartProducts.find(el => el.id === id)
  const clearItemsOnCart = () => {
    setCartProducts([])
    localStorage.removeItem('cartItems')
  }

  useEffect(() => {
    fakeApi().then(data => {
      setProducts(data)
      localStorage.setItem('products', JSON.stringify(data))
    })
    const itemsOnCart = JSON.parse(localStorage.getItem('cartItems'))
    const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
    if (itemsOnCart) {
      setCartProducts(prev => itemsOnCart)
    }
    if (favoriteItems) {
      setFavorites(favoriteItems)
    }
  }, [])
  return (
      <AppContext.Provider value={{products, modal, setModal, clearItemsOnCart, hasCart, setProducts, cartProducts, setCartProducts, favorites, setFavorites}}>
        {children}
      </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const items = useContext(AppContext)

  return {...items}
}
