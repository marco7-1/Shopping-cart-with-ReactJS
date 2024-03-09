import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import FormatCurrency from "./FormatCurrency";
import { UseShoppingCart } from "../Context/ShoppingCartContext";

const StoreItem = ({ id, price, name, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = UseShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img 
      src={imgUrl} 
      variant="top" 
      style={{ height: "300px" , objectFit: "cover"  }} />
      <CardBody>
        {/* "align-items-baseline" >>> on the same line  */}
        <CardTitle className="d-flex justify-content-between align-items-baseline">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{FormatCurrency(price)}</span>
        </CardTitle>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} in Cart</span>
                <Button onClick={() => increaseItemQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeItemFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default StoreItem;
