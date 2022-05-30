//library
import {useEffect, useState} from "react";
import {useAppContext} from "../context";
import {productsServices} from "../services/products";

export const useFavorite = (product) => {

  const {setFavorites, favorites} = useAppContext()
  const [isFavorite, setFavorite] = useState(favorites.some(el => el?.id === product.id))

  async function addFavorite(_id) {
    try {
      await productsServices.addToFavourites(_id);
    } catch (e) {
      console.error(e.message);
    }
  }

  async function deleteFavorite(_id) {
    try {
      await productsServices.deleteToFavourites(_id);
    } catch (e) {
      console.error(e.message);
    }
  }

  const toggleFavorite = (e) => {
    e.stopPropagation()
    setFavorite(prev => !prev)
    if (isFavorite) {
      setFavorites(prev => {
        deleteFavorite(product.id)
        const filteredItems = prev.filter(el => el.id !== product.id)
        localStorage.setItem('favorites', JSON.stringify(filteredItems))
        return filteredItems
      })
    } else {
      addFavorite(product.id)
      setFavorites(prev => [...prev, product])
      localStorage.setItem('favorites', JSON.stringify([...favorites, product]))
    }
  }

  return {toggleFavorite, isFavorite}
}
