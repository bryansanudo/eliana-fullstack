import React, { useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import ProductFilter from "@/components/product/ProductFilter";
import useFetchCollection from "@/customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS, selectProducts } from "@/redux/slice/productSlice";
import Footer from "@/components/Footer";
import imageSpinner from "@/assets/spinner.jpg";
import { GET_PRICE_RANGE } from "@/redux/slice/productSlice";

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
    dispatch(
      GET_PRICE_RANGE({
        products: data,
      })
    );
  }, [dispatch, data]);
  return (
    <>
      <div className="pt-24  h-screen ">
        {<div className="mt-10  ">{isLoading ? null : <ProductFilter />}</div>}

        <div className="  w-full  md:mx-6  ">
          {isLoading ? (
            <img
              src={imageSpinner}
              alt="Loading..."
              style={{ width: "250px" }}
              className="mx-auto"
            />
          ) : (
            <>
              <ProductList products={products} />
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
