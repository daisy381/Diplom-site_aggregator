//library
import {useEffect, useState} from "react";

//services
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

  useEffect(async () => {
    await fetchData();
  }, []);

  useEffect( ()=>{
    setIsFavorite(favorites?.some(el => el[0]?.id === product.id))
  },[favorites])

  async function toggleFavorite (e){
    e.stopPropagation()

    if (isFavorite) {
      await deleteFavorite(product.id);
    } else {
      await addFavorite(product.id);
    }
    await fetchData();

  }

  return {toggleFavorite, isFavorite}
}
