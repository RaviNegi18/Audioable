import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import logo from "../assets/image.png";
import { navTags } from "../utills/featuredData";
import { useCartContext } from "../context/cardContext";
import { CartPopUp } from "../compoents/CartPopUp";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const { state } = useCartContext();
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const totalItems = state?.items?.length || 0;

  // Prevent scrolling when cart popup is open
  useEffect(() => {
    document.body.style.overflow = showCart ? "hidden" : "auto";
  }, [showCart]);

  return (
    <nav className="bg-[#191919] sm:h-[90px] flex items-center relative z-50">
      <div className="custom-container w-full flex items-center justify-between border-b-2 border-zinc-700 h-full px-4 sm:px-6">
        
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="logo"
            className="object-cover sm:w-36 w-28"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center tracking-wide gap-10">
          {navTags.map((tag, index) => (
            <Link
              to={tag.link}
              key={index}
              className={`font-semibold text-[14px] tracking-wide transition-colors duration-200 ${
                location.pathname === tag.link
                  ? "text-[#D87D4A]"
                  : "text-white hover:text-[#D87D4A]"
              }`}
            >
              {tag.name.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Cart + Mobile Menu Icon */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            <BsCart3 className="text-white w-6 h-6" />
            <span className="h-4 w-4 bg-red-600 rounded-full absolute -top-1.5 left-5 flex items-center justify-center text-white text-xs font-semibold">
              {totalItems}
            </span>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden cursor-pointer text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IoClose className="w-7 h-7" />
            ) : (
              <IoMenu className="w-7 h-7" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#1f1f1f] flex flex-col items-center gap-6 py-6 md:hidden border-t border-zinc-700 z-40">
          {navTags.map((tag, index) => (
            <Link
              to={tag.link}
              key={index}
              onClick={() => setMenuOpen(false)}
              className={`font-semibold text-[16px] tracking-wide transition-colors duration-200 ${
                location.pathname === tag.link
                  ? "text-[#D87D4A]"
                  : "text-white hover:text-[#D87D4A]"
              }`}
            >
              {tag.name.toUpperCase()}
            </Link>
          ))}
        </div>
      )}

      {showCart && <CartPopUp showCart={showCart} setShowCart={setShowCart} />}
    </nav>
  );
};

export default Navbar;
