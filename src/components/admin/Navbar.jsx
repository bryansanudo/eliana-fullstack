import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="all-products">todos los productos</Link>
          </li>
          <li>
            <Link to="add-product">agregar producto</Link>
          </li>
          <li>
            <Link to="orders">pedidos</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
