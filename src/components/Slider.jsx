import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
const Slider = () => {
  /*  const slides = [
    {
      url: "https://i.ibb.co/yV5LMxK/slider1.jpg",
      title: "slide1",
    },
    {
      url: "https://i.ibb.co/GHS3CBs/slider2.jpg",
      title: "slide2",
    },
    {
      url: "https://i.ibb.co/hYVJDq5/slider3.jpg",
      title: "slide3",
    },

    {
      url: "https://i.ibb.co/yXxgLdJ/slider4.jpg",
      title: "slide4",
    },
  ]; */
  const slides = [
    {
      url: "/publications.png",
      title: "Últimas novedades",
      description:
        "Aquí encontrarás consejos y trucos sobre cómo utilizar nuestros productos de manera eficiente y creativa, ademas de todo el contenido exclusivo de Need Weed ",
      btn: "publicaciones",
      link: "/publications",
    },
    {
      url: "/zaza.png",
      title: "Explora nuevos horizontes",
      description: "Sumérgete en una experiencia unica con Need Weed ",
      btn: "Preguntas Frecuentes",
      link: "/faq",
    },
    {
      url: "/zaza-products.jpg",
      title: "Descubre nuestra nueva linea",

      description:
        "En nuestro compromiso por brindarte la mejor experiencia, presentamos ZAZA y su gran variedad de productos",
      link: "/product3",
      className: "",
      btn: "Explora",
    },
    {
      url: "/2.jpg",
      title: "Destilados hibridos ",
      btn: "Explora",
      description:
        "Disfruta los mejores destilados de 1.2ML de contenido y concentrados al 98%. Las cepas varian según la disponibilidad.",
      link: "/product2",
      className: "",
    },

    {
      url: "/9.jpg",
      title: "Baterias",
      btn: "Explora",
      description:
        "Nos complace presentarte nuestras elegantes Baterias de alta calidad. ¿Ya conoces todos nuestros productos?",
      link: "/",
      className: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const scroll = () => {
    window.scroll({ top: 1000, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative max-w-[1000px] flex items-center justify-center w-full mt-6 flex-col md:flex-row ">
        <div className=" h-[470px] md:w-1/2 bg-[#ffcdc2] shadow-xl shadow-gray-600 w-full rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl">
          <div className="flex mx-auto w-full md:bottom-0 justify-center py-2  absolute z-50 ">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <RxDotFilled
                  onClick={() => goToSlide(slideIndex)}
                  className="text-4xl cursor-pointer text-black"
                />
              </div>
            ))}
          </div>

          <div className=" flex flex-col mt-20 mx-10 gap-10  ">
            <h2 className="text-4xl font-semibold text-black ">
              {slides[currentIndex].title}
            </h2>
            <p className="text-xl font-medium">
              {slides[currentIndex].description}
            </p>

            <Link
              to={slides[currentIndex].link}
              className={slides[currentIndex].className}
              onClick={scroll}
            >
              <button className="hover:bg-[#6057ca] py-2 px-10 text-lg font-medium border-2 border-black rounded-full hover:scale-105 duration-700 ">
                {slides[currentIndex].btn}
              </button>
            </Link>
          </div>
        </div>
        <div className=" h-[470px] w-full md:w-1/2 m-auto   relative group    ">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-cover bg-center duration-500 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl shadow-xl shadow-gray-600  "
          ></div>

          {/* Left Arrow */}
          <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft
              className="text-[#ffcdc2]"
              onClick={prevSlide}
              size={30}
            />
          </div>
          {/* Right Arrow */}
          <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight
              className="text-[#ffcdc2]"
              onClick={nextSlide}
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
