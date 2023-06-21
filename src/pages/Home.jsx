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
    <section className="h-screen flex flex-col justify-start items-center text-cente pt-[120px] md:mx-10 mx-4">
      <Slider />
      <Product />
    </section>
  );
};

export default Home;
