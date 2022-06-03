//library
import {useEffect, useState} from "react";
import {useAppContext} from "../context";
import {productsServices} from "../services/products";

export const useFavorite = (product) => {

  const[favorites,setFavorites] = useState([]);
  const[isFavorite,setIsFavorite] = useState(false);

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

  async function fetchData() {
    try {
      let response = await productsServices.getFavouritesData();
      setFavorites(response);
    } catch (e) {
      console.error(e.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect( ()=>{
    setIsFavorite(favorites?.some(el => el[0]?.id === product.id))
  },[favorites])

  const toggleFavorite = (e) => {
    e.stopPropagation()

    if (isFavorite) {
      deleteFavorite(product.id);
    } else {
      addFavorite(product.id);
    }
    fetchData();

  }

  return {toggleFavorite, isFavorite}
}
