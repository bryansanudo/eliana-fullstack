import React, { useEffect } from "react";
import Section from "@/components/common/Section";

import Slider from "@/components/Slider";
import Product from "@/components/product/Product";
const Home = () => {
  const url = window.location.href;

  const scrollToProducts = () => {
    if (url.includes("#products")) {
      window.scrollTo({
        top: 700,
        behavior: "smooth",
      });
      return;
    }
  };

  useEffect(() => {
    scrollToProducts();
  }, []);

  return (
    <section className="h-auto flex flex-col justify-start items-center text-cente pt-[120px] md:mx-10 mx-4">
      <p className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
        Siempre parchados con Need Weed
      </p>
      <Slider />
      <Product />
    </section>
  );
};

export default Home;
