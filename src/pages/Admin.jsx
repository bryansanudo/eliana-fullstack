import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "@/components/admin/AddProduct";
import Home from "@/components/admin/Home";
import Navbar from "@/components/admin/Navbar";
import Orders from "@/components/admin/Orders";
import ViewProducts from "@/components/admin/ViewProducts";

const Admin = () => {
  return (
    <>
      <div className="pt-40">
        <div>
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="all-products" element={<ViewProducts />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;
