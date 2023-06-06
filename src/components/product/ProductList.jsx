import { useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Search from "@/components/Search";
import ProductItem from "@/components/product/ProductItem";

const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <>
      <div id="product">
        <div className="border-b-4  flex justify-between items-center">
          <div className="flex items-center  justify-center">
            <BsFillGridFill
              className="text-red-400 cursor-pointer text-2xl mr-2"
              onClick={() => setGrid(true)}
            />
            <FaListAlt
              className="text-[#0066d4] cursor-pointer text-2xl mr-2"
              onClick={() => setGrid(false)}
            />
            <p>10</p> products found
          </div>

          {/* search icon */}

          <div>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* sort products */}

          <div className="sort">
            <select
              defaultValue="Sort By"
              className="select select-primary w-full max-w-xs"
            >
              <option disabled>Sort By</option>
              <option value="latest">Latest</option>
              <option value="lowest-price">Lowest Price</option>
              <option value="highest-price">Highest Price</option>
              <option value="a-z">A-Z</option>
              <option value="z-a>">Z-A</option>
            </select>
          </div>
        </div>

        <div className={grid ? "grid grid-cols-3" : "flex flex-col "}>
          {products.lenght === 0 ? (
            <p>No products found</p>
          ) : (
            <>
              {products.map((product) => {
                return (
                  <div key={product.id}>
                    <ProductItem {...product} grid={grid} product={product} />
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
