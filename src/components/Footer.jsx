import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex items-center justify-center gap-4">
      <p className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#e67c04] to-[#5C24B3] hover:from-[#5C24B3] hover:to-[#e67c04] transition duration-500 ease-in-out transform   md:text-5xl">
        Need Weed
      </p>

      <button type="button" onClick={useScroll}>
        <AiOutlineArrowUp
          className="text-gray-400 text-2xl animate-bounce"
          size={40}
        />
      </button>
    </footer>
  );
};

export default Footer;
