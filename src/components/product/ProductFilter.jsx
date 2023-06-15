import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "@/redux/slice/productSlice";
import { useEffect, useState } from "react";
import { FILTER_BY_CATEGORY, FILTER_BY_BRAND } from "@/redux/slice/filterSlice";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");

  const products = useSelector(selectProducts);

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

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  return (
    <>
      <h2 className="font-bold text-4xl py-8  text-transparent bg-clip-text  bg-gradient-to-r from-[#e67c04] to-[#5C24B3] w-min md:text-5xl capitalize">
        Categorias
      </h2>
      <div className="flex flex-col items-start gap-2">
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
      <h4>Brand</h4>
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
