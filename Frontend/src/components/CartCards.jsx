import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateDecrement,
  updateIncrement,
} from "../redux/counter/cartSlice.js";

const CartCards = () => {
  //using redux
  let boughtItems = useSelector((state) => state.cartItems.purchasedItems);
  // console.log("Bought Items from Redux State:", boughtItems);
  const emptyCart = useSelector((state) => state.isCartEmpty.eliminateCart);

  //calculate total bill
  let totalBill = 0;
  for (let index = 0; index < boughtItems.length; index++) {
    const item = boughtItems[index];
    const itemAmount = item.noItem;
    const itemPrice = item.price;
    totalBill += itemPrice * itemAmount;
  }

  const dispatch = useDispatch();
  //for visibilty of an element
  const [visibility, setVisibility] = useState(false);
  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  //emptyCart
  if (emptyCart === true) {
    setTimeout(() => {
      boughtItems.map((boughtItem) => {
        dispatch(
          updateDecrement({
            noItem: boughtItem.noItem,
            id: boughtItem.id,
            totalItems: boughtItem.noItem,
          })
        );
      });
      // boughtItems = []; // reset the items
      console.log("super important");
      console.log(boughtItems);
    }, 1000);
  }

  return (
    <>
      <span className="text-4xl text-yellow-500 w-auto flex justify-center items-center mb-5">{`Total Bill: ${totalBill}$ 💰`}</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center mb-12">
        {boughtItems.map((boughtItem) => {
          if (boughtItem.noItem > 0) {
            return (
              <div className="my-5" key={boughtItem.id}>
                <div className="card w-80 shadow-xl hover:scale-105 duration-200 cursor-pointer bg-white text-black dark:bg-gray-800 dark:text-white">
                  <figure>
                    <img
                      className="w-full h-80"
                      src={boughtItem.image}
                      alt="movie img"
                    />
                  </figure>
                  <div className="card-body ">
                    <h2 className="card-title">
                      {boughtItem.name}
                      <div className="badge badge-secondary">
                        {boughtItem.category}
                      </div>
                    </h2>
                    <p>{boughtItem.title}</p>
                    <div className="flex flex-col pb-14">
                      <div className="card-actions flex justify-between items-center">
                        <div className="px-3 py-1 border rounded-full">
                          {`${boughtItem.price * boughtItem.noItem}$`}
                        </div>
                        <div
                          className="cursor-pointer px-2 py-1 border rounded-full hover:bg-pink-500 hover:border-none hover:text-black hover:font-bold"
                          onClick={handleVisibility}
                        >
                          Modify
                        </div>
                      </div>
                      <div
                        className={`justify-between absolute gap-16 bottom-5 mt-5 transition-all ease-in-out duration-200 ${
                          visibility ? "flex" : "hidden"
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8"
                            viewBox="0 -960 960 960"
                            fill="#EAC452"
                            onClick={() =>
                              dispatch(
                                updateDecrement({
                                  noItem: 1,
                                  id: boughtItem.id,
                                  totalItems: boughtItem.noItem,
                                })
                              )
                            }
                          >
                            <path d="M200-446.67v-66.66h560v66.66H200Z" />
                          </svg>

                          <p className="text-2xl dark:text-white text-black">
                            {boughtItem.noItem}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="w-8"
                            fill="#EAC452"
                            onClick={() =>
                              dispatch(
                                updateIncrement({
                                  noItem: 1,
                                  id: boughtItem.id,
                                })
                              )
                            }
                          >
                            <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
                          </svg>
                        </div>

                        <button
                          className="px-4 py-1 rounded-md text-white bg-pink-500 dark:bg-pink-700 hover:text-black hover:bg-pink-700 duration-200"
                          onClick={() =>
                            dispatch(
                              updateDecrement({
                                noItem: boughtItem.noItem,
                                id: boughtItem.id,
                                totalItems: boughtItem.noItem,
                              })
                            )
                          }
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      {totalBill === 0 && emptyCart === false && (
        <div className="text-red-500 w-auto flex justify-center items-center mt-5 mb-16  text-5xl">
          Buy More! <span className="emoji emoji-large">💀</span>
        </div>
      )}
    </>
  );
};

export default CartCards;
