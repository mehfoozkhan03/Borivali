import { createContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CartContext.Provider value={{ count, setCount }}>
      {props.children}
    </CartContext.Provider>
  );
};