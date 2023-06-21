import React from "react";
import Section from "@/components/common/Section";

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
    <div className="">
      <Section name="portafolio" title="Preguntas Frecuentes ">
        {/* subtitle={`
    Disfruta los mejores destilados hibridos de 1.2ML de contenido y concentrados al 98%. Las cepas varian según la disponibilidad.

   `} */}
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <div className="flex flex-col items-center justify-center max-w-[1000px]">
            {questions.map((item) => (
              <div
                key={item.id}
                tabIndex={0}
                className="collapse collapse-arrow border border-[#ffcdc2] bg-base-100 rounded-box w-full"
              >
                <div className="collapse-title text-xl font-medium ">
                  {item.question}
                </div>
                <div className="collapse-content text-left">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Faq;
