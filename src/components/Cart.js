import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import { UseShoppingCart } from "../Context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import storeItems from "../data/storeItems.json"
const Cart = ({ isOpen }) => {
  const { CartItems, closeCart } = UseShoppingCart();
  return (
    // side menu
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {CartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="fw-bold fs-5 ms-auto">
            Total{" "}
          {FormatCurrency(
            CartItems.reduce((total , CartItem) => {
              const item = storeItems.find((i) => i.id === CartItem.id);
              return total + (item?.price || 0) * CartItem.quantity;
            }, 0)
          )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
