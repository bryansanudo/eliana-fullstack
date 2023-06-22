import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/configFirebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Loader from "@/components/Loader";

import Reset from "@/components/Reset";
import Section from "@/components/common/Section";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //estado para mostar dinamicamente login o reset
  const [reset, setReset] = useState(false);

  const redirect = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Inicio de sesion exitoso ");
        redirect("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Inicio de sesion exitoso");
        redirect("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}

      <section className={`mt-10 ${reset ? "hidden" : ""}`}>
        {/*   <div className="flex items-center justify-center lg:w-1/2 ">
          <img src="/login.png" className="w-[300px] lg:w-[600px] " />
        </div>

        <div className="divider lg:divider-horizontal" /> */}
        <motion.div
          variants={textVariant()}
          className="flex flex-col items-center justify-center mx-auto"
        >
          <h2 className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
            Iniciar Sesion
          </h2>
          <form
            onSubmit={loginUser}
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
              className="input  input-primary  w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-secondary w-full capitalize">
              Ingresar
            </button>
            <div
              className="link link-primary w-full text-center lg:text-left "
              onClick={() => setReset(true)}
            >
              Cambiar Contraseña
            </div>

            <div
              onClick={signInWithGoogle}
              className="btn btn-primary capitalize  gap-4 w-full"
            >
              <FcGoogle className="md:text-3xl text-lg" />
              Ingresar con Google
            </div>
          </form>
        </motion.div>
      </section>

      {reset ? <Reset setReset={setReset} /> : ""}
    </>
  );
};

export default SectionWrapper(Login, "login");
