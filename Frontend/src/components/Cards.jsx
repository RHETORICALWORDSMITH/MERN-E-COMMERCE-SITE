import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  buyUpdate,
} from "../redux/counter/purchaseSlice.js";
import { addToCart } from "../redux/counter/cartSlice.js";
import toast from "react-hot-toast";

const Cards = ({ item }) => {
  // using redux
  const noItem = useSelector(
    (state) => state.boughtItem.selectedItems[item.id]?.value || 0
  );

  const dispatch = useDispatch();
  // for visibility of an element
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleBuy = () => {
    dispatch(addToCart({ item, noItem })); // Dispatch the action to add the item to the cart
    dispatch(buyUpdate({ id: item.id })); // Dispatch the action to update the number of selected items
    toast.success("Item added to cart!");
    setVisibility(false);
  };

  return (
    <>
      <div className="p-3 my-5">
        <div className="card shadow-xl hover:scale-105 duration-200 cursor-pointer bg-white text-black dark:bg-gray-800 dark:text-white">
          <figure>
            <img className="w-full h-80" src={item.image} alt="movie img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="flex flex-col ">
              <div className="card-actions flex justify-between selectedItems-center">
                <div className="px-3 py-1 border rounded-full">{`${item.price}$`}</div>
                <div
                  className="cursor-pointer px-2 py-1 border rounded-full hover:bg-pink-500 hover:border-none hover:text-black hover:font-bold"
                  onClick={handleVisibility}
                >
                  Order!
                </div>
              </div>
              <div
                className={`justify-between mt-5 transition-all ease-in-out duration-200 ${
                  visibility ? "flex" : "hidden"
                }`}
              >
                <div className="flex selectedItems-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                    viewBox="0 -960 960 960"
                    fill="#EAC452"
                    onClick={() => dispatch(decrement({ id: item.id }))}
                  >
                    <path d="M200-446.67v-66.66h560v66.66H200Z" />
                  </svg>

                  <p className="text-2xl dark:text-white text-black">
                    {noItem}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8"
                    viewBox="0 -960 960 960"
                    fill="#EAC452"
                    onClick={() => dispatch(increment({ id: item.id }))}
                  >
                    <path d="M446.67-446.67H200v-66.66h246.67V-760h66.66v246.67H760v66.66H513.33V-200h-66.66v-246.67Z" />
                  </svg>
                </div>

                <button
                  className="px-4 py-1 rounded-md text-white bg-pink-500 dark:bg-pink-700 hover:text-black hover:bg-pink-700 duration-200"
                  onClick={() => {
                    handleBuy();
                  }}
                  disabled={noItem === 0}
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
