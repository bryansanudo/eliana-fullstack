import React from "react";

import { Link } from "react-router-dom";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Reset = ({ setReset }) => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center justify-center mx-auto"
      >
        <h2 className="text-center text-white font-semibold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Cambiar contraseña
        </h2>
        <form className="mt-10 flex flex-col gap-6 w-[300px] lg:w-[500px] items-center shadow-lg shadow-gray-500 rounded-xl p-8 ">
          <input
            type="text"
            placeholder="Email"
            className="input  input-primary  w-full"
          />

          <button className="btn btn-secondary capitalize  w-full">
            Enviar Correo
          </button>

          <Link
            onClick={() => setReset(false)}
            className="link link-primary w-full "
          >
            Login
          </Link>
        </form>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Reset, "reset");
