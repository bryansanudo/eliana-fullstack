import { AiOutlineArrowUp } from "react-icons/ai";
import IconInstagram from "@/icons/IconInstagram";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const Footer = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={textVariant(0.2)}
      className="flex items-center justify-center gap-4 "
    >
      <p className="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl">
        Need Weed
      </p>

      {/* <button type="button" onClick={useScroll}>
        <AiOutlineArrowUp
          className="text-gray-400 text-2xl animate-bounce"
          size={40}
        />
      </button> */}
      <article className="animate-pulse hover:scale-125 duration-300 my-4">
        <a
          href="https://www.instagram.com/eli.caro12/"
          target="_blank"
          rel="noreferrer"
        >
          <IconInstagram />
        </a>
      </article>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
