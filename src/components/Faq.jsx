import React from "react";

import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "¿ Cómo puedo hacer para que dure más mi batería ? ",
      answer:
        "Lo mas optimo es no cargar directamente a la luz ya que por la cantidad de voltios del toma corriente la batería podría presentar fallas, lo mas recomendable es cargarla desde un computador o cualquier otro dispositivo que tenga puerto USB",
    },
    {
      id: 2,
      question: "¿Se pueden recargar los productos de la marca ZAZA ? ",
      answer: "No, puesto que este aceite es 100% importado",
    },
    {
      id: 3,
      question: "¿ Hacen envíos nacionales ? ",
      answer:
        "Si hacemos envíos a todo Colombia por medio de Interrapidisimo aproximadamente 2 días tarda en llegar nuestro producto",
    },
    {
      id: 4,
      question: "¿ Índica, Sativa e Híbrida ?",
      answer:
        "Existe una increíble variedad y diversidad de sabores que se conocen como cepas hibridas, ya que se creean mediante la combinacion de cepas de Índica y Sativa",
    },
    {
      id: 5,
      question: "Sativa",
      answer:
        "Este tipo de variedad va a producir un efecto más “para arriba”, alegre y energizante, con efectos cerebrales estimulantes.",
    },
    {
      id: 6,
      question: "Índica",
      answer:
        "Esta variedad produce una sensación más tranquilizante, es genial para descansar y relajarse.",
    },
    {
      id: 7,
      question: "Híbrida",
      answer:
        "Esta mezcla de cepas produce todo un abanico de sensaciones, fuertemente asociadas a las variedades originales, índica o sativa.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mx-10 pt-20 ">
      <p className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl p-2">
        Preguntas Frecuentes
      </p>
      <div className="flex flex-col items-center justify-center max-w-[1000px] mt-10">
        {questions.map(({ id, question, answer }) => (
          <motion.div
            variants={fadeIn("up", "spring", id * 0.5, 0.75)}
            key={id}
            tabIndex={0}
            className="collapse collapse-arrow border border-[#ffcdc2] bg-base-100 rounded-box w-full"
          >
            <div className="collapse-title text-xl font-medium ">
              {question}
            </div>
            <div className="collapse-content text-left">
              <p>{answer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Faq, "faq");
