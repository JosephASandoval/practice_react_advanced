import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // this is a custom component, so make sure you render props.children
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
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

  console.log(cartItems);

  return (
    <Context.Provider
      value={{ allPhotos, toggleFavorite, addToCart, cartItems }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
