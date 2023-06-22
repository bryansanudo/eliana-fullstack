import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import spinnerImg from "@/assets/spinner.jpg";
import Section from "@/components/common/section";
import IconWpp from "@/icons/IconWpp";
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
            <div className="flex md:flex-row flex-col  gap-4 md:mx-20 mx-4 shadow-xl shadow-primary rounded-lg ">
              <img
                className="object-contain md:h-[400px]  h-full rounded-t-lg "
                src={product.imageURL}
                alt=""
              />

              <div className="flex items-start justify-center  flex-col">
                <p className="text-primary text-lg font-bold">{`$${product.price}`}</p>
                <p className="text-left text-sm max-w-[800px]">
                  {product.desc}
                </p>

                {/* <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex gap-4 items-center justify-center">
                    <button className="btn">-</button>
                    <p>
                      <b>1</b>
                    </p>
                    <button className="btn">+</button>
                  </div>
                  <button className="btn btn-primary mt-4">ADD TO CART</button>
                </div> */}
                <article className=" hover:scale-125 duration-300 my-4 mx-auto">
                  <a
                    href="https://wa.me/c/573127965835"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconWpp />
                  </a>
                </article>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
