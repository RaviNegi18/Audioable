import React from "react";
import { useParams } from "react-router-dom";
import { storeData } from "../utills/productsData";
import { products } from "../utills/featuredData";
import arrow from "../assets/asset 7.svg";
import ListnerImg from "../assets/asset 13.jpeg";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cardContext";
import { toast } from "react-toastify";
const Products = () => {
  const { dispatch, state } = useCartContext();

  const navigate = useNavigate();
  const { slug } = useParams();
  const selectedProduct = storeData.filter((product) => product.slug === slug);


  const INCREASE_QUANTITY = (product) => {
    const isInCart = selectedProductIds?.includes(product.slug);

    if (!isInCart) {
      toast.info("Please add the product to cart first!");
      return;
    }


    const price = Number(product.price.toString().replace(/[^0-9.][\$\"]/g, ""));
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { id: product.id, price },
    });
  };

  const DECREASE_QUANTITY = (product) => {
    const isInCart = selectedProductIds?.includes(product.slug);

    if (!isInCart) {
      toast.info("Please add the product to cart first!");
      return;
    }


    const price = Number(product.price.toString().replace(/[^0-9.][\$\"]/g, ""));
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id: product.id, price }
    })
  }


  if (!selectedProduct) {
    return <h1>product not found!</h1>;
  }

  const recomendedProducts = selectedProduct[0]?.recomended?.map(
    (product) => product
  );

  const currentProduct = state?.items?.find(
    (item) => item.slug === selectedProduct[0]?.slug
  );

  const productQuantity = currentProduct ? currentProduct.quantity : 0;


 

  const selectedProductIds = state?.items?.map((item) => item.slug);
  const isInCart = selectedProductIds?.includes(selectedProduct[0].slug);
  return (
    <div>
      <img src={selectedProduct[0]?.red} alt="" />
      <div className=" custom-container">
        <button className="my-10 xl:my-20 font-medium text-lg tracking-wide text-[#807d7d] border-b-2 border-transparent hover:border-[#8a8888] transition-ease-in-out duration-300 -pb-4"
         onClick={() => navigate(-1)}
        >
          Go Back
        </button>

        {/*  */}

        <div className="flex flex-stretch justify-between items-center">
          <div>
            <img
              src={selectedProduct[0]?.image}
              alt={selectedProduct[0].title}
              className="w-[550px] h-[500px] rounded-lg"
            />
          </div>
          <div
            className={`flex pl-20 items-start justify-center flex-col gap-10 `}
          >
            <h1 className="text-[#D87D4A] text-xl font-semibold">
              {selectedProduct[0].subTitle}
            </h1>
            <h1 className="font-semibold text-3xl">
              {selectedProduct[0].title}
            </h1>
            <p className="leading-relaxed text-[#807878] max-w-xl">
              {selectedProduct[0].description}
            </p>
            title
            <h1 className="text-2xl font-semibold">
              {selectedProduct[0].price}
            </h1>
            <div className="flex items-center justify-between gap-10">
              <button className="flex items-center justify-center gap-6 bg-[#F1F1F1] text-[#000000] px-8 py-3 text-xl font-semibold">
                <span onClick={() => DECREASE_QUANTITY(selectedProduct[0])}>-</span>
                {productQuantity}
                <span onClick={() => INCREASE_QUANTITY(selectedProduct[0])}

                >
                  +
                </span>
              </button>
              <button
                className="bg-[#da804d] py-3 px-8 text-white text-md font-normal disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={isInCart}
                onClick={() => {
                  dispatch({ type: "ADD_TO_CART", payload: selectedProduct[0] })
                  toast.success("Product added to cart")
                }}
              >
                {isInCart ? "Added to Cart" : "Add to Cart"}
              </button>

            </div>
          </div>
        </div>

        <div className="my-20 flex items-start  justify-center gap-20">
          {/* features */}

          <div className="flex items-start justify-start  flex-col gap-8 w-[60%]">
            <div className="flex items-start justify-start w-full">
              <h1 className="text-4xl font-bold uppercase flex items-center">
                Features
              </h1>
            </div>
            <p className="flex text-sm font-normal items-start justify-start flex-col gap-10 max-w-4xl text-[#000000]">
              <span>{selectedProduct[0].features}</span>
              <span>{selectedProduct[0].feat}</span>
            </p>
          </div>
          {/* conatvee */}
          <div className="w-[35%] flex flex-col items-center justify-start gap-10">
            <div className="flex items-center justify-center w-full">
              <h1 className="text-2xl font-bold uppercase justify-center flex items-center">
                In the Box
              </h1>
            </div>
            <div className="flex items-center justify-between flex-col gap-2">
              {selectedProduct[0]?.content?.map((prod, index) => {
                const [quantity, ...rest] = prod.split(" ");

                return (
                  <>
                    <div className="flex items-start justify-start flex-col gap-2 w-full" key={index}>
                      <p className="flex items-center justify-center gap-20">
                        <span className="text-md font-semibold text-[#D87D4A]">
                          {quantity}
                        </span>
                        <span className="text-[#000000] text-md font-light flex items-center justify-center">
                          {rest}
                        </span>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1.2fr_1.8fr]     gap-4 my-10">
          <div className="grid grid-rows-2 gap-y-4 w-full">
            <img
              src={selectedProduct[0]?.fullImages[0]}
              alt="img1"
              className="object-cover h-full w-full rounded-lg"
            />
            <img
              src={selectedProduct[0]?.fullImages[1]}
              alt="img2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div>
            <img
              src={selectedProduct[0]?.fullImages[2]}
              alt="img2"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="my-20">
          <div className="flex items-center justify-center flex-col gap-20">
            <h1 className="flex items-center justify-center font-semibold text-4xl w-full">
              you may also like
            </h1>

            <div className="flex items-center justify-center gap-6 w-full">
              {recomendedProducts?.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      onClick={() => console.log(item.slug)}
                      className=" flex items-center justify-center flex-col gap-10"
                    >
                      <>
                        <img
                          src={item.image}
                          alt=""
                          className="w-[400px] object-cover rounded-lg"
                        />
                        <h1 className="flex items-center justify-center text-center text-2xl font-bold tracking-wider">
                          {item?.title}
                        </h1>
                        <button
                          className="bg-[#D87D4A] py-2 px-2 w-[170px] text-lg font-medium  text-white"
                          onClick={() => navigate(`/products/${item.slug}`)}
                        >
                          See Product
                        </button>
                      </>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex items-center gap-6 justify-between my-30 custom-container ">
              {/* shop */}
              {products.map((product, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#F1F1F1] text-[#191919] w-[370px] h-[180px] rounded-lg gap-4 p-4 flex flex-col items-center bg-cover justify-center"
                  >
                    <img
                      src={product.img}
                      alt="img"
                      className="h-[150px] w-[150px]  -mt-20 object-cover"
                    />
                    <h1 className="text-2xl font-medium">{product.heading}</h1>
                    <h2
                      className="flex items-center justify-center gap-4 text-lg font-medium"
                      onClick={() => navigate(product.link)}
                    >
                      Shop
                      <span>
                        <img src={arrow} alt="arrow" />
                      </span>
                    </h2>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between  gap-10 ">
              {/* Audio gear */}

              <div className="flex-1 flex flex-col gap-8 mb-10">
                <h1 className="text-5xl font-semibold text-[#191919] uppercase leading-tight">
                  Bringing you the
                  <span className="text-red-500 px-2">best</span>
                  audio gear
                </h1>

                <p className="text-[#7e7a7a] font-normal tracking-wide leading-relaxed">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
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
      </div>
    </div>
  );
};

export default Products;
