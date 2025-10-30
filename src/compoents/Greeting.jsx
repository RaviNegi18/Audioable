import React from "react";
import greet from "../assets/check.svg";
import { useCartContext } from "../context/cardContext";
import { useNavigate } from "react-router-dom";

const Greeting = () => {
    const { state, dispatch } = useCartContext();
    const navigate = useNavigate();


    const subtotal = state.items.reduce((acc, item) => {
        const cleanedPrice = Number(item.price.replace(/\$|,/g, "")) || 0;
        return acc + cleanedPrice * (item.quantity || 1);
    }, 0);

    const shipping = 50;
    const vat = subtotal * 0.2;
    const grandTotal = subtotal + shipping + vat;


    const firstItem = state.items[0];
    const otherItemsCount = state.items.length - 1;



function handleNavigate() {
  navigate("/");
  dispatch({ type: "EMPTY_CART" });
}

    return (
        <div className="custom-container my-20 flex items-center justify-center">
            <div
                className="shadow-lg w-[600px] p-10 rounded-lg bg-white"
                style={{
                    boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                }}
            >
                <div className="flex flex-col gap-6">
                    <img src={greet} alt="check" className="w-16" />

                    <h1 className="text-3xl font-semibold leading-10 tracking-wide uppercase">
                        Thank you <br /> for your order
                    </h1>

                    <p className="text-sm font-medium text-slate-500">
                        You will receive an email confirmation shortly.
                    </p>

                    {firstItem && (
                        <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <img
                                    src={firstItem.image}
                                    alt={firstItem.title}
                                    className="w-12 h-12 rounded"
                                />
                                <div>
                                    <p className="font-semibold">{firstItem.title}</p>
                                    <p className="text-sm text-gray-500">
                                        ${firstItem.price} × {firstItem.quantity}
                                    </p>
                                </div>
                            </div>

                            <p className="font-bold">
                                $
                                {(
                                    Number(firstItem.price.replace(/\$|,/g, "")) *
                                    firstItem.quantity
                                ).toLocaleString()}
                            </p>
                        </div>
                    )}

                    {otherItemsCount > 0 && (
                        <p className="text-center text-sm text-gray-500">
                            and {otherItemsCount} other item(s)
                        </p>
                    )}

                    <div className="bg-black text-white p-4 rounded-lg flex justify-between items-center">
                        <h1 className="font-semibold">Grand Total</h1>
                        <p className="font-bold">${grandTotal.toLocaleString()}</p>
                    </div>
                    <div>
                        <button className="flex items-center justify-center bg-[#da804d] w-full text-white p-2 hover:bg-[#ddb78d]" onClick={() => handleNavigate()}>
                            Back To Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Greeting;
