import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import logo from "../assets/image.png";
import { navTags } from "../utills/featuredData";
import { useCartContext } from "../context/cardContext";
import { CartPopUp } from "../compoents/CartPopUp";

const Navbar = () => {
  const { state } = useCartContext();
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();

  const totalItems = state?.items?.length || 0;

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCart]);

  return (
    <nav className="bg-[#191919] h-20 sm:h-[90px] flex items-center relative">
      <div className="custom-container w-full flex items-center justify-between gap-[200px] border-b-2 h-full border-zinc-700">

        <div>
          <h1 className="text-white font-extrabold text-3xl">
            <img src={logo} alt="logo" className="object-cover" sizes="10px" />
          </h1>
        </div>

        <div className="flex items-center justify-center tracking-wide gap-[39px]">
          {navTags.map((tag, index) => (
            <Link
              to={tag.link}
              key={index}
              className={`font-semibold text-[14px] leading-1 tracking-wide transition-colors duration-200 ${
                location.pathname === tag.link
                  ? "text-[#D87D4A]" 
                  : "text-white hover:text-[#D87D4A]" 
              }`}
            >
              {tag.name.toUpperCase()}
            </Link>
          ))}
        </div>

        <div
          className="flex items-center justify-center relative cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        >
          <BsCart3 className="text-white w-6 h-6" />
          <span className="h-4 w-4 bg-red-600 rounded-full absolute -top-1.5 left-5 flex items-center justify-center text-white text-sm font-semibold">
            {totalItems}
          </span>
        </div>
      </div>

      {showCart && <CartPopUp showCart={showCart} setShowCart={setShowCart} />}
    </nav>
  );
};

export default Navbar;
