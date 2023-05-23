import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "@/configFirebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setIsLoading(true);

    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));

      onSnapshot(q, (snapshot) => {
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(allProducts);
        setProducts(allProducts);
      });
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {products.length === 0 ? (
        <p>No product found.</p>
      ) : (
        <table className="w-full md:mt-[90px] text-sm ">
          <thead className="">
            <tr className="h-20">
              <th className="shadow-md shadow-primary rounded-xl">s/n</th>
              <th className="shadow-md shadow-primary rounded-xl">Image</th>
              <th className="shadow-md shadow-primary rounded-xl">Name</th>
              <th className="shadow-md shadow-primary rounded-xl">Category</th>
              <th className="shadow-md shadow-primary rounded-xl">Price</th>
              <th className="shadow-md shadow-primary rounded-xl">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {products.map((product, index) => {
              const { id, name, price, imageURL, category } = product;
              return (
                <tr key={id} className="text-center  border-b-2">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={imageURL}
                      alt={name}
                      className="h-[100px] w-full object-contain pt-4"
                    />
                  </td>
                  <td className="text-center">{name}</td>
                  <td className="text-center">{category}</td>
                  <td className="text-center">{`$${price}`}</td>
                  <td>
                    {/*  <Link to="/admin/add-product">
                    </Link> */}
                    <div className="flex items-center justify-center gap-4">
                      <FaEdit />
                      <FaTrashAlt />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ViewProducts;
