import Cart from "../components/Cart";
import { createContext, useContext, useEffect, useState } from "react";

const ShoppingCartContext = createContext({});

const intialCartItems = localStorage.getItem("shopping_cart")
  ? JSON.parse(localStorage.getItem("shopping_cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, SetIsOpen] = useState(false);
  const [CartItems, SetCartItems] = useState(intialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(CartItems));
  }, [CartItems]);

  const openCart = () => {
    SetIsOpen(true);
  };
  const closeCart = () => {
    SetIsOpen(false);
  };
  const cartQuantity = CartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemsQuantity = (id) => {
    return CartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseItemQuantity = (id) => {
    SetCartItems((currItems) => {
      // check if item not found in cart or equal 0
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id) => {
    SetCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id) => {
    SetCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        CartItems,
        getItemsQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        openCart,
        closeCart,
        cartQuantity,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;

export const UseShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
