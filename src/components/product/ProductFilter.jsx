import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const ProductFilter = () => {
  return (
    <>
      <h2 className="font-bold text-4xl py-8  text-transparent bg-clip-text  bg-gradient-to-r from-[#e67c04] to-[#5C24B3] w-min md:text-5xl capitalize">
        Categorias
      </h2>
      <div>
        <button>All</button>
      </div>
      <h4>Brand</h4>
      <div>
        <select name="brand" className="select select-bordered  select-sm">
          <option value="all">All</option>
          <option value="phone">Phone</option>
        </select>
        <h4>Price</h4>
        <p className="font-bold text-primary text-2xl">$1500</p>
        <div>
          <input
            type="range"
            className="range range-primary range-xs"
            name="price"
            min="100"
            max="1000"
          />
        </div>
        <button className="btn btn-primary">Clear Filter</button>
      </div>
    </>
  );
};

export default ProductFilter;
