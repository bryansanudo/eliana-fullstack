import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import IconWpp from "@/icons/IconWpp";
const ProductItem = ({ product, id, name, price, desc, imageURL }) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  return (
    <Tilt className="w-[250px]  ">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className=" rounded-[20px] h-[400px] flex justify-evenly items-center flex-col"
        >
          <Link to={`/product-details/${id}`}>
            <img
              className="object-contain h-[200px] w-[200px] rounded-2xl "
              src={imageURL}
              alt={name}
            />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="text-primary text-lg font-bold">{`$${price}`}</p>
              <h2 className="text-lg">{shortenText(name, 20)}</h2>
            </div>
            <article className=" hover:scale-125 duration-300 my-4">
              <a
                href="https://wa.me/c/573127965835"
                target="_blank"
                rel="noreferrer"
              >
                <IconWpp />
              </a>
            </article>

            {/* <button className="btn btn-primary btn-sm mt-4">Add To Cart</button> */}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProductItem;
