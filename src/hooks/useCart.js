import {useAppContext} from "../context";


export const useCart = (product = {}) => {
  const {setCartProducts, cartProducts, hasCart} = useAppContext()

  const itemsOnCart = hasCart(product.id)
  const addItemOnCart = (e) => {
    e.stopPropagation()
    setCartProducts(prev => [...prev, product])
    localStorage.setItem('cartItems', JSON.stringify([...cartProducts, product]))
  }


  const deleteItemOnCart = () => {
    setCartProducts(prev => {
      const fitleredCartItems = prev.filter(el => el.id !== product.id)
      localStorage.setItem('cartItems', JSON.stringify(fitleredCartItems))
      return fitleredCartItems
    })
  }

  return {
    itemsOnCart, addItemOnCart, deleteItemOnCart, cartProducts
  }
}
