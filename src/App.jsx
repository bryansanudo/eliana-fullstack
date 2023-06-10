import Header from "@/components/header/Header";

import { Home, Contact, Login, Register } from "@/pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminOnlyRoute from "@/components/AdminOnlyRoute";
import Admin from "@/pages/Admin";
import ProductDetails from "@/components/product/ProductDetails";
import Faq from "@/components/Faq";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
