import React from "react";
import { Button, Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UseShoppingCart } from "../Context/ShoppingCartContext";

const Navbar = () => {
  const { openCart , cartQuantity } = UseShoppingCart();
  return (
    <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-primary"
          className="rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        onClick={openCart}
        >
          {<i class="fa-solid fa-cart-shopping"></i>}
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              bottom: 0,
              right: 0,
              transform: "translate(25%,25%)",
            }}
          >
          {cartQuantity}
          </div>
        </Button>
      </Container>
    </Navbarbs>
  );
};

export default Navbar;
