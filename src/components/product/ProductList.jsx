import { useEffect, useState } from "react";
import { FaListAlt } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Search from "@/components/Search";
import ProductItem from "@/components/product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  selectFilteredProducts,
} from "@/redux/slice/filterSlice";
import Pagination from "@/components/Pagination";

const ProductList = ({ products }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  const filteredProducts = useSelector(selectFilteredProducts);

  //pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, sort, products]);

  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, search, products]);

  return (
    <>
      <div className="border-b-4 w-full flex justify-between items-center mb-10 flex-col md:flex-row">
        <div className="flex items-center  justify-center ">
          <p>
            <b>{filteredProducts.length}</b> products found
          </p>
        </div>
        {/* search icon */}
        <div className="flex gap-2 mb-4">
          {/* <div>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div> */}

          {/* sort products */}

          <div className="sort">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="select select-primary w-full max-w-xs"
            >
              <option disabled>Organizar por</option>
              <option value="latest">Ultimo</option>
              <option value="lowest-price">Precio mas bajo</option>
              <option value="highest-price">Precio mas alto</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.lenght === 0 ? (
          <p>No products found</p>
        ) : (
          <>
            {currentProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} product={product} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
      />
    </>
  );
};

export default ProductList;
