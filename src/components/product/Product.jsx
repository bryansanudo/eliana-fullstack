import React from "react";
import ProductList from "@/components/product/ProductList";
import ProductFilter from "@/components/product/ProductFilter";

const Product = () => {
  return (
    <>
      <div className="pt-24 md:pt-0 md:grid md:grid-cols-5 h-screen px-4 ">
        <div className=" bg-red-500 cols-span-1 ">
          <ProductFilter />
        </div>
        <div className="col-span-4 bg-blue-500 w-full ">
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default Product;
