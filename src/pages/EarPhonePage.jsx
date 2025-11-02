import React from "react";
import arrow from "../assets/asset 7.svg";
import ListnerImg from "../assets/asset 13.jpeg";
import { products } from "../utills/featuredData";
import { storeData } from "../utills/productsData";
import { useNavigate } from "react-router-dom";

const EarPhonePage = () => {
    const navigate = useNavigate();
    const EarphoneData = storeData?.filter((item) => item.type === "earphone");

    //   console.log("Earphones==============", EarphoneData);
    console.log("proodod====", products)

    return (
        <div>
            <div className="h-[200px] flex items-center justify-center bg-[#191919]">
                <h1 className="flex items-center justify-center font-bold text-2xl sm:text-6xl uppercase text-white tracking-wide leading-0">
                    Earphones
                </h1>
            </div>

            <div className="custom-container my-10 flex flex-col gap-8">

                {EarphoneData.map((product, index) => (
                    <div
                        key={product.id}
                        className={`flex items-stretch  justify-center gap-10 sm:gap-2 my-10 ${index % 2 !== 0 ? "flex-row-reverse" : ""
                            }`}
                    >

                        <div className="flex items-center justify-center">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="sm:w-[800px] w-full h-auto sm:h-[600px] object-cover rounded-xl"
                            />
                        </div>


                        <div className="flex items-start justify-center flex-col sm:px-30 gap-4 sm:gap-10">
                            <h1 className="text-[#D87D4A] text-xl font-semibold">
                                {product.subTitle}
                            </h1>

                            <h1 className="font-semibold text-3xl">
                                {product.title}
                                <br /> 
                            </h1>

                            <p className="leading-relaxed max-w-2xl text-[#807878]">
                                {product.description}
                            </p>

                            <button
                                onClick={() => navigate(`/products/${product.slug}`)}
                                className="uppercase bg-[#D87D4A] py-3 px-2 w-[200px] text-white"
                            >
                                See Product
                            </button>
                        </div>
                    </div>
                ))}


                <div className="flex items-center sm:gap-4 sm:flex-row gap-10 flex-col  rounded-lg justify-between my-10">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-[#F1F1F1] text-[#191919] w-[360px] h-[200px] border-radius-[20px] gap-2 p-4 flex flex-col items-center bg-cover justify-center"
                        >
                            <img
                                src={product.img}
                                alt="img"
                                className="h-[100px] w-[100px]  -mt-20 object-cover"
                            />
                            <h1 className="text-2xl font-medium">{product.heading}</h1>
                            <h2 className="flex items-center justify-center gap-4" onClick={()=>navigate(`/${product.heading}`)}>
                                Shop
                                <span>
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="flex items-center sm:flex-row flex-col justify-between sm:my-30  my-20 gap-10 ">
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
                            our products. Stop by our store to meet some of the fantastic
                            people who make Audiophile the best place to buy your portable
                            audio equipment.
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

export default EarPhonePage;
