import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import spinnerImg from "@/assets/spinner.jpg";
import Section from "@/components/common/section";
const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const obj = {
        id,
        ...docSnap.data(),
      };
      setProduct(obj);
    } else {
      console.log("No such document !");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product === null ? (
        <img src={spinnerImg} alt="Loaing..." className="pt-72 mx-auto" />
      ) : (
        <>
          <Section title={product.name}>
            <div className="w-full text-left pl-12 md:pl-24 mb-6">
              <Link to="/#products">&larr; Back To Products</Link>
            </div>
            <div className="flex md:flex-row flex-col gap-4 md:mx-20 mx-4  max-h-[500px]">
              <img
                className="w-[400px] h-[400px] object-contain shadow-md shadow-primary rounded-2xl"
                src={product.imageURL}
                alt=""
              />

              <div className="flex items-start justify-center  flex-col">
                <p className="text-primary text-lg font-bold">{`$${product.price}`}</p>
                <p className="text-left text-sm max-w-[800px]">
                  {product.desc}
                </p>
                <p>
                  <b>SKU</b>
                  {product.id}
                </p>
                <p>
                  <b>Brand</b>
                  {product.brand}
                </p>
                <div className="flex gap-4 items-center justify-center">
                  <button className="btn">-</button>
                  <p>
                    <b>1</b>
                  </p>
                  <button className="btn">+</button>
                </div>
                <button className="btn btn-primary mt-4">ADD TO CART</button>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
