import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configFirebase";
import { useNavigate } from "react-router-dom";
import Reset from "@/components/Reset";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [reset, setReset] = useState(false);

  const redirect = useNavigate();
  const registrarUsuarioBD = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== cPassword) {
      setIsLoading(false);
      toast.error("Las contraseñas no coiciden");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Usuario Creado exitosamente ");
        redirect("/spents");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center justify-center mx-auto pt-10 "
      >
        <h2 className="text-white font-semibold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Registrate
        </h2>
        <form
          onSubmit={registrarUsuarioBD}
          className="flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 mt-16 "
        >
          <input
            type="text"
            placeholder="Correo"
            className="input  input-primary  w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input input-primary  w-full"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confrima Contraseña"
            className="input input-primary  w-full"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button className="btn btn-secondary capitalize w-full">
            Registrate
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Register, "register");
