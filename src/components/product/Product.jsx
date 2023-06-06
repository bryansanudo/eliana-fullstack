import React, { useEffect } from "react";
import ProductList from "@/components/product/ProductList";
import ProductFilter from "@/components/product/ProductFilter";
import useFetchCollection from "@/customHooks/useFetchCollection";
import { useDispatch, useSelector } from "react-redux";
import { STORE_PRODUCTS, selectProducts } from "@/redux/slice/productSlice";
import Footer from "@/components/Footer";
import imageSpinner from "@/assets/spinner.jpg";

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
      <div className="pt-24 md:pt-0 md:grid md:grid-cols-5 h-screen md:mx-20 mx-6">
        <div className=" bg-red-500 cols-span-1">
          {isLoading ? null : <ProductFilter />}
        </div>

        <div className="col-span-4  w-full  md:mx-6  ">
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
