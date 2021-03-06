import React, { useState, useEffect } from "react";
import { dataURL } from "./data/dataURL";

const Context = React.createContext();

function ContextProvider({ children }) {
  // this is a custom component, so make sure you render props.children
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(dataURL)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        // console.log(id);
        // console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite }; // Here you never modify the original array
        // photo.isFavorite = !photo.isFavorite // not good, becasue you are modifying state directly. Here you are modifying state in both your new mapped array and your original array due to arrays and objects being pass by reference.
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(newCartItem) {
    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
  }

  function removeFromCart(itemId) {
    const newArr = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newArr);
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
