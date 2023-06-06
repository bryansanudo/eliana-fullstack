import React, { useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import ProductFilter from "@/components/product/ProductFilter";
import useFetchCollection from "@/customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS, selectProducts } from "@/redux/slice/productSlice";

const Product = () => {
  const { data, isLoading } = useFetchCollection("products");
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);
  return (
    <>
      <div className="pt-24 md:pt-0 md:grid md:grid-cols-5 h-screen px-4 ">
        <div className=" bg-red-500 cols-span-1 ">
          <ProductFilter />
        </div>
        <div className="col-span-4  w-full ">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
};

export default Product;
