import { BsEmojiSunglasses, BsSearchHeart } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center gap-2 items-center text-center bg-green-500  text-white py-o px-[16px] max-w-[480px] h-[55px] mx-auto">
            <BsEmojiSunglasses/>
            <BsSearchHeart/>
        <span className="   text-[24px] font-bold">searcher</span>
      </nav>
    </>
  );
};

export default Navbar;
