'use client';

import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (id, amount = 1) => {
    let basket = localStorage.getItem('basket');
    if (basket) {
      basket = JSON.parse(basket);
      basket.push({
        id: id,
        amount: amount,
      });
    } else {
      basket = [];
      basket.push({
        id: id,
        amount: amount,
      });
    }

    localStorage.setItem('basket', JSON.stringify(basket));
    setBasket(basket);
  };

  return <BasketContext.Provider value={{ basket, addToBasket }}>{children}</BasketContext.Provider>;
};

export const useBasket = () => useContext(BasketContext);
