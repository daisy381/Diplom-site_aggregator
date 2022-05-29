
import {useEffect, useState} from "react";
import {useAppContext} from "../context";

export const useFavorite = (product) => {
  const {setFavorites, favorites} = useAppContext()
  const [isFavorite, setFavorite] = useState(favorites.some(el => el?.id === product.id))

  const toggleFavorite = (e) => {
    e.stopPropagation()
    setFavorite(prev => !prev)
    if (isFavorite) {
      setFavorites(prev => {
        const filteredItems = prev.filter(el => el.id !== product.id)
        localStorage.setItem('favorites', JSON.stringify(filteredItems))
        return filteredItems
      })
    } else {
      setFavorites(prev => [...prev, product])
      localStorage.setItem('favorites', JSON.stringify([...favorites, product]))
    }
  }

  return {toggleFavorite, isFavorite}
}
