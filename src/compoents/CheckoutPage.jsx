import React from "react";
import COD from "../assets/COD.svg";
import { useCartContext } from "../context/cardContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  

  // const onSubmit = (data) => {
  //   console.log("Form Data S", data);
  //   toast.success("Order placed successfully!");
  //   dispatch({
  //     type: "IS_CHECKOUT",
  //     payload: true
  //   })
  //   navigate("/thank-you");
  // };

  const subtotal = state.items.reduce((acc, item) => {
    const cleanedPrice = Number(item.price.replace(/\$|,/g, "")) || 0;
    return acc + cleanedPrice * (item.quantity || 1);
  }, 0);
  const shipping = 50;
  const vat = subtotal * 0.2;
  const grandTotal = subtotal + shipping + vat;


  const onSubmit = (data) => {
  console.log("Form Data:", data);
  toast.success("Order placed successfully!");
  dispatch({
    type: "IS_CHECKOUT",
    payload: true,
  });
  navigate("/thank-you");
};


const onError = (errors) => {
  if (errors.name) toast.error(errors.name.message);
  else if (errors.email) toast.error(errors.email.message);
  else if (errors.phone) toast.error(errors.phone.message);
  else if (errors.address) toast.error(errors.address.message);
  else if (errors.zip) toast.error(errors.zip.message);
  else if (errors.city) toast.error(errors.city.message);
  else if (errors.payment) toast.error(errors.payment.message);
};

  return (
    <div>
      <div className="custom-container my-2 xl:my-6">
        <div className="custom-container">
          <button
            onClick={() => navigate(-1)}
            className="my-4 font-medium text-sm tracking-wide text-[#807d7d] border-b-2 border-transparent hover:border-[#8a8888] transition-ease-in-out duration-300 -pb-4"
          >
            Go Back
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit,onError)}
          className="flex items-start justify-center gap-6"
        >

          <div
            className="flex flex-col gap-4 w-[65%] p-6"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="flex w-full flex-col gap-2">
              <h1 className="uppercase text-xl font-bold">Checkout</h1>
              <p className="uppercase text-[#D87D4A] pt-3 text-sm font-semibold">
                billing details
              </p>
            </div>

            <div className="flex gap-8 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="pl-2 capitalize text-xs font-semibold">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Alexa Clark"
                  className={`w-full outline-none border p-3 rounded-sm ${errors.name ? "border-red-500" : "border-slate-300"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="pl-2 capitalize text-xs font-semibold">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  type="email"
                  placeholder="alexa@gmail.com"
                  className={`w-full outline-none border p-3 rounded-sm ${errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
            </div>


            <div className="flex flex-col gap-2 w-full px-2">
              <label className="pl-2 capitalize text-xs font-semibold">
                Phone Number
              </label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Must be 10 digits",
                  },
                })}
                type="text"
                placeholder="9876543210"
                className={`w-full outline-none border p-3 rounded-sm ${errors.phone ? "border-red-500" : "border-slate-300"
                  }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
            </div>


            <div className="flex flex-col gap-2 w-full px-2">
              <p className="uppercase text-[#D87D4A] text-sm py-2 font-semibold">
                Shipping Info
              </p>
              <label className="pl-2 capitalize text-xs font-semibold">
                Your Address
              </label>
              <input
                {...register("address", { required: "Address is required" })}
                type="text"
                placeholder="123 Main Street"
                className={`w-full outline-none border p-3 rounded-sm ${errors.address ? "border-red-500" : "border-slate-300"
                  }`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs">{errors.address.message}</p>
              )}
            </div>

            <div className="flex items-center justify-center gap-8 w-full px-6 py-2">
              <div className="flex flex-col gap-2 w-full">
                <label className="pl-2 text-xs font-semibold">Zip Code</label>
                <input
                  {...register("zip", {
                    required: "Zip code is required",
                    pattern: {
                      value: /^[0-9]{5,6}$/,
                      message: "Invalid zip code",
                    },
                  })}
                  placeholder="110001"
                  className={`w-full outline-none border p-3 rounded-sm ${errors.zip ? "border-red-500" : "border-slate-300"
                    }`}
                />
                {errors.zip && (
                  <p className="text-red-500 text-xs">{errors.zip.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="pl-2 text-xs font-semibold">City</label>
                <input
                  {...register("city", { required: "City is required" })}
                  placeholder="New Delhi"
                  className={`w-full outline-none border p-3 rounded-sm ${errors.city ? "border-red-500" : "border-slate-300"
                    }`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full px-2">
              <p className="uppercase text-[#D87D4A] text-sm py-2 font-semibold">
                Payment Details
              </p>
              <div className="flex items-start justify-between gap-6 w-full">
                <p className="text-sm font-semibold">Payment Method</p>

                <div className="flex flex-col gap-4 w-[70%]">
                  <label className="flex items-center gap-4 border p-4 border-slate-300 rounded">
                    <input
                      type="radio"
                      value="eMoney"
                      {...register("payment", { required: "Select payment type" })}
                    />
                    <span className="text-xs font-semibold">E-Money</span>
                  </label>

                  <label className="flex items-center gap-4 border p-4 border-slate-300 rounded">
                    <input
                      type="radio"
                      value="cod"
                      {...register("payment", { required: "Select payment type" })}
                    />
                    <span className="text-xs font-semibold">
                      Cash on Delivery
                    </span>
                  </label>
                  {errors.payment && (
                    <p className="text-red-500 text-xs">
                      {errors.payment.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex p-4 gap-10 items-center">
              <img src={COD} alt="cod" />
              <h1 className="text-sm font-medium text-slate-500 max-w-[500px] leading-6">
                The ‘Cash on Delivery’ option enables you to pay in cash when our
                delivery courier arrives. Just make sure your address is correct
                so that your order will not be cancelled.
              </h1>
            </div>

            <button
              type="submit"
              className="bg-[#D87D4A] text-white w-[200px] py-3 rounded-md font-semibold mt-4 self-end"
            >
              Continue & Pay
            </button>
          </div>

          <div
            className="flex flex-col p-6 w-[35%]"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="flex justify-between mb-4">
              <h1 className="text-xl font-semibold text-gray-900">Summary</h1>
            </div>

            {state.items.map((item) => {
              const cleanedPrice = Number(item.price.replace(/\$|,/g, "")) || 0;
              const itemTotal = cleanedPrice * (item.quantity || 1);
              return (
                <div
                  key={item.id}
                  className="flex justify-between items-center gap-4 text-gray-800"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      ₹{cleanedPrice.toLocaleString()} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-gray-900">
                    ₹{itemTotal.toLocaleString()}
                  </p>
                </div>
              );
            })}

            <div className="mt-6 border-t border-gray-200 pt-4 space-y-2 text-gray-800">
              <div className="flex justify-between">
                <p className="text-gray-500">Total</p>
                <p className="font-semibold">₹{subtotal.toLocaleString()}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Shipping</p>
                <p className="font-semibold">₹{shipping}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">VAT (Included)</p>
                <p className="font-semibold">₹{vat.toFixed(2)}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold text-black mt-2">
                <p>Grand Total</p>
                <p className="text-[#D87D4A]">₹{grandTotal.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
