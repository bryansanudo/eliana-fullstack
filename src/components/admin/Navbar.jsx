import React from "react";
import { Link } from "react-router-dom";

import { AiFillFileAdd } from "react-icons/ai";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { MdChecklist } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <ul className="menu bg-black h-full  ">
        <li>
          <Link to="all-products">
            <BsReverseListColumnsReverse className="text-4xl text-primary" />
            Productos
          </Link>
        </li>
        <li>
          <Link to="/admin/add-product/ADD">
            <AiFillFileAdd className="text-4xl text-primary" />
            Agregar
          </Link>
        </li>
        <li>
          <Link to="orders">
            <MdChecklist className="text-4xl text-primary" />
            Pedidos
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
