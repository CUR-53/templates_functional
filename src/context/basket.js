'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = localStorage.getItem('basket');

    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  const addToBasket = (id, amount = 1) => {
    let basket = JSON.parse(localStorage.getItem('basket') || '[]');
    const itemIndex = basket.findIndex((item) => item.id === id);

    if (basket) {
      if (itemIndex !== -1) {
        basket[itemIndex].amount += amount;
      } else {
        basket.push({ id, amount });
      }
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    setBasket(basket);
  };

  const updateBasketItem = (id, newAmount) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === id) {
        return { ...item, amount: newAmount };
      }
      return item;
    });

    localStorage.setItem('basket', JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  return <BasketContext.Provider value={{ basket, addToBasket, updateBasketItem }}>{children}</BasketContext.Provider>;
};

export const useBasket = () => useContext(BasketContext);
