import React, { useState } from "react";
import Section from "@/components/common/Section";
import { AiFillFileAdd } from "react-icons/ai";
import { storage } from "@/configFirebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
const categories = [
  {
    id: 1,
    name: "Laptop",
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Fashion",
  },
  {
    id: 4,
    name: "Phone",
  },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: 0,
    category: "",
    brand: "",
    desc: "",
  });

  const [uploadProgress, setUploadProgress] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Imagen Subida Con Exito");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <>
      <Section title="Agregar Producto">
        <form
          onSubmit={addProduct}
          className="shadow-md shadow-black rounded-xl p-6 w-full max-w-[800px] flex flex-col gap-4 items-center justify-center"
        >
          <label className="w-full text-left">Nombre Del Producto</label>
          <input
            required
            type="text"
            className="input input-primary text-lg input-md w-full"
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Imagen Del Producto</label>
          {uploadProgress === 0 ? null : (
            <div className="bg-[#aaa] border-[1px] border-[solid] rounded-[10px] w-full">
              <div
                className="bg-primary border-[1px] border-[solid] rounded-[10px] text-white text-sm font-semibold py-0 px-[1rem] "
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress < 100
                  ? `Subiendo ${uploadProgress}%`
                  : `Subida Completada ${uploadProgress}%`}
              </div>
            </div>
          )}
          <input
            type="file"
            className="file-input file-input-primary w-full"
            name="image"
            accept="image/*"
            onChange={(e) => handleImageChange(e)}
          />
          {product.imageURL === "" ? null : (
            <input
              className="file-input file-input-primary w-full"
              type="text"
              //required

              name="imageURL"
              value={product.imageURL}
              disabled
            />
          )}
          <label className="w-full text-left">Precio Del Producto</label>
          <input
            required
            type="number"
            className="input input-primary text-lg input-md w-full"
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Categoria Del Producto</label>
          <select
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
            className="input input-primary text-lg input-md w-full"
          >
            <option value="" disabled>
              -- Selecciona Categoria Del Producto --
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
          <label className="w-full text-left">Marca Del Producto</label>
          <input
            required
            type="text"
            className="input input-primary text-lg input-md w-full"
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label className="w-full text-left">Descripcion Del Producto</label>
          <textarea
            required
            className="textarea textarea-primary w-full"
            name="desc"
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
          />

          <button type="submit">
            <AiFillFileAdd className="text-primary text-5xl mt-2 hover:scale-150 duration-300" />
          </button>
        </form>
      </Section>
    </>
  );
};

export default AddProduct;
