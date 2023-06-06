import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("document data:", docSnap.data());
    } else {
      console.log("No such document !");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return <div className="pt-40">{id}</div>;
};

export default ProductDetails;
