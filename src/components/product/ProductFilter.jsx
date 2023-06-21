import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "@/redux/slice/productSlice";
import { useEffect, useState } from "react";
import {
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
} from "@/redux/slice/filterSlice";
import { selectMinPrice, selectMaxPrice } from "@/redux/slice/productSlice";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(300000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];
  const allBrands = [
    "All",
    ...new Set(products.map((product) => product.brand)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [dispatch, products, brand]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [dispatch, products, price]);

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  const clearFilters = () => {
    setBrand("All");
    setCategory("All");
    setPrice(maxPrice);
  };
  return (
    <>
      <div className="flex  items-start gap-2 pt-10">
        {allCategories.map((cat, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === cat ? "" : null}
              onClick={() => filterProducts(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
      {/*   <h4>Brand</h4>
      <div>
        <select
          name="brand"
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered  select-sm"
        >
          {allBrands.map((brand, index) => {
            return (
              <option key={index} value={brand}>
                {brand}
              </option>
            );
          })}
        </select>
         <h4>{`${price}`}</h4>

        <div>
          <input
            type="range"
            className="range range-primary range-xs"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <button className="btn btn-primary" onClick={clearFilters}>
          Clear Filter
        </button>
      </div> */}
    </>
  );
};

export default ProductFilter;
