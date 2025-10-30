import React from "react";
import { useCartContext } from "../context/cardContext";
import { useNavigate } from "react-router-dom";

export const CartPopUp = ({ showCart, setShowCart }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useCartContext();




  const totalAmount = state.items?.reduce((acc, item) => {

    const cleanedPrice = item.price.replace(/\$|,/g, "");
    const numericPrice = Number(cleanedPrice) || 0;

    return acc + numericPrice * (item.quantity || 1);
  }, 0);



  return (
    <>

      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[400px]  shadow-lg p-5 relative max-h-[80vh] overflow-y-auto">
            {/* <button
              onClick={() => setShowCart(false)}
              className="absolute top-3 right-3 text-gray-600 text-xl"
            >
              ✕
            </button> */}

            {/* <h2 className="text-xl font-bold mb-4">Your Cart</h2> */}

            {state.items.length === 0 ? (
           <div className="flex items-center p-10 rounded-md justify-center flex-col gap-6">
              <p className="text-black text-center text-xl  font-bold">Your cart is empty 🛒</p>
                 
              <button className="flex w-full p-2 text-white hover:bg-[#eea47a]   bg-[#D87D4A] items-center justify-center"    onClick={() => setShowCart(false)}>
                close cart
              </button>
           </div>
            ) : (
              <div className="flex flex-col gap-4">
                {state.items.map((item) => {
                  const cleanedPrice = item.price.replace(/\$|,/g, "");
                  console.log("heree======", item)
                  return (
                    <div
                      key={item.id}
                      className="flex justify-between  text-gray-800"
                    >
                      <img src={item.image} alt="" className="w-14 h-14" />
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          ₹{Number(cleanedPrice)} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-bold">
                        ₹{Number(cleanedPrice) * item.quantity}
                      </p>
                    </div>
                  )
                })}

                <div className="flex justify-between mt-4 font-bold text-lg border-t pt-2">
                  <p>Total:</p>
                  <p>₹{totalAmount.toLocaleString()}</p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-center">
              {
                state.items.length > 0 && (
                  <>
                    <button
                      className="bg-[#da804d] my-4 py-2 px-8 text-white text-md font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-[#d8ab7f]"
                      onClick={() => {
                        navigate("/checkout");
                        setShowCart(false);
                      }}

                    >
                      checkout
                    </button>
                  </>
                )
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};
