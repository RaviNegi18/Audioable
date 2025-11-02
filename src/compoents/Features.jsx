import React from 'react'

import arrow from "../assets/asset 7.svg"
import speakerbg from "../assets/asset 18.svg";
import speakermain from "../assets/asset 10.png";
import z7speaker from "../assets/table.jpg";
import YX1 from "../assets/asset 12.jpeg";
import ListnerImg from "../assets/asset 13.jpeg";
import { products } from '../utills/featuredData'
import { useNavigate } from 'react-router-dom';
const Features = () => {
    const navigate=useNavigate();


    return (
        <div className=''>

            <div className='custom-container '>

                <div className='flex items-center gap-20 flex-col  sm:flex-row  sm:gap-8 justify-between my-40'>
                    {/* shop */}
                    {
                        products.map((product, index) => {
                            return (
                                <div key={index} className='bg-[#F1F1F1] text-[#191919] w-[400px] h-[210px] rounded-lg gap-4 p-4 flex flex-col items-center bg-cover justify-center' >
                                    <img src={product.img} alt="img" className='h-[170px] w-[170px]  -mt-20 object-cover' />
                                    <h1 className='text-2xl font-medium'>{product.heading}</h1>
                                    <h2 className='flex items-center justify-center gap-4 text-lg font-medium' onClick={()=>navigate(product.link)}>
                                        Shop
                                        <span>
                                            <img src={arrow} alt="arrow" />
                                        </span>
                                    </h2>
                                </div>
                            )
                        })
                    }

                </div>
                <div className='bg-[#D87D4A] my-6 relative overflow-hidden'>
                    {/* orange box */}

                    <img src={speakerbg} alt="svg background" className='w-full h-full absolute inset-[10px 30% 20px 0]' />
                    <div className='pt-40 flex items-center justify-evenly'>
                        <div className='relative px-4'>
                            <img src={speakermain} alt="main speaker" className='h-[500px] -mb-4 ' />
                        </div>
                        <div className='flex justify-start items-start h-full flex-col gap-8 pb-40'>
                            <h1 className='text-white text-6xl font-semibold tracking-widest'>
                                ZX9
                                <br />
                                SPEAKER
                            </h1>
                            <p className='text-white max-w-sm leading-relaxed'>
                                Upgrade to premium speakers that are
                                phenomenally
                                built to deliver truly remarkable sound.
                            </p>
                            <button className='bg-[#191919] py-3 px-2 w-[200px] text-[#ffffff]'>
                                SEE PRODUCT
                            </button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='flex items-center my-10'>


                    <div className='relative w-full h-[400px]'style={{
                        backgroundImage: `url(${z7speaker}) `, backgroundRepeat: "no-repeat",backgroundSize:"cover",backgroundPosition:"center",width:"100%"
                    }}>
                        {/* <img src={z7speaker} alt="z9x speaker" className='h-auto w-full object-contain' /> */}

                        <div className='flex flex-col gap-4 items-center justify-center absolute top-1/4 left-1/8'>
                            <h1 className='text-4xl font-semibold tracking-widest text-[#191919]'>
                                ZX7 Speaker
                            </h1>
                            <button className='w-[200px] text-md py-3 px-2 border-2 border-[#191919] text-[#191919] uppercase font-semibold'>
                                See Product
                            </button>
                        </div>


                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-stretch justify-between my-10 gap-10 '>
                    {/* yx1 eadrpjoen */}

                    <div className='flex-1'>
                        <img src={YX1} alt="" className='object-cover w-full h-full' />
                    </div>
                    <div className='bg-[#F1F1F1] flex flex-col items-start justify-center flex-1 gap-8'>
                        <div className='p-20 flex flex-col gap-8'>
                            <h1 className='text-3xl font-semibold tracking-widest text-[#191919]'>
                                YX1 EARPHONES
                            </h1>
                            <button className='w-[200px] text-sm py-4 px-2 border-3 border-[#191919] text-[#191919] uppercase font-semibold'>
                                see product
                            </button>
                        </div>

                    </div>
                </div>

                <div className='flex items-center flex-col mx-4 sm:mx-0 sm:flex-row justify-between my-10 sm:my-40 gap-10 '>
                    {/* Audio gear */}

                    <div className='flex-1 flex flex-col gap-8'>
                        <h1 className='text-5xl font-semibold text-[#191919] uppercase leading-tight'>
                            Bringing you the
                            <span className='text-red-500 px-2'>
                                best
                            </span>

                            audio gear
                        </h1>

                        <p className='text-[#7e7a7a] font-normal tracking-wide leading-relaxed'>
                            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.


                        </p>
                    </div>
                    <div className='flex-1'>
                        <img src={ListnerImg} alt="music listner" className='w-full h-[600px] object-cover rounded-xl' />
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Features