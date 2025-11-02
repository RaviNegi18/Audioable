import React from "react";
import arrow from "../assets/asset 7.svg";
import ListnerImg from "../assets/asset 13.jpeg";
import { products } from "../utills/featuredData";
import { storeData } from "../utills/productsData";
// import { headphonesData } from "../utills/headphonesData.js";
import { useNavigate } from "react-router-dom";

const HeadPhonePage = () => {
  const navigate = useNavigate();
  const handNavigate = (id) => {
    navigate(`/products/${id}`);
  };
  const headphonesData = storeData.filter((item) => item.type == "headphone");
  const revsers = headphonesData.map((item) => item.reverse);

  return (
    <div>
      <div className="h-[200px] flex items-center justify-center bg-[#191919]">
        <h1 className="font-bold text-2xl  sm:text-6xl uppercase text-white tracking-wide">
          Headphones
        </h1>
      </div>

      <div className="custom-container my-10 flex flex-col gap-8">
        {headphonesData.map((item) => (
          <div
            key={item.id}
            className={`flex items-stretch justify-center gap-4 sm:gap-10 my-10 ${
              item.reverse ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="sm:w-[650px] object-cover w-full h-auto sm:h-[550px]"
              />
            </div>

            <div
              className={`flex items-start justify-center flex-col gap-4 sm:gap-10 sm:${
                item.reverse ? "pr-30" : "pl-30"
              }`}
            >
              <h1 className="text-[#D87D4A] text-xl font-bold">
                {item.subTitle}
              </h1>
              <h1 className="font-semibold text-3xl">{item.title}</h1>
              <p className="leading-relaxed max-w-lg sm:max-w-2xl text-[#807878]">
                {item.description}
              </p>
              <button
                className="uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white"
                onClick={() => handNavigate(item.slug)}
              >
                See product
              </button>
            </div>
          </div>
        ))}

        {/* Shop Section */}
        <div className="flex sm:flex-row flex-col items-center justify-between my-20 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-[#F1F1F1] text-[#191919] w-[360px] h-[200px] p-4 flex flex-col items-center justify-center"
            >
              <img
                src={product.img}
                alt="img"
                className="h-[100px] w-[100px] -mt-20 object-cover"
              />
              <h1 className="text-2xl font-medium">{product.heading}</h1>
              <h2
                className="flex items-center justify-center gap-4"
                onClick={() => navigate(`/${product.heading}`)}
              >
                Shop
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </h2>
            </div>
          ))}
        </div>

        {/* Audio Gear Section */}
        <div className="flex sm:flex-row flex-col items-center justify-between my-20 gap-10">
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-5xl font-semibold text-[#191919] uppercase leading-tight">
              Bringing you the
              <span className="text-red-500 px-2">best</span>
              audio gear
            </h1>
            <p className="text-[#7e7a7a] font-normal tracking-wide leading-relaxed">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={ListnerImg}
              alt="music listner"
              className="w-full h-[600px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadPhonePage;
