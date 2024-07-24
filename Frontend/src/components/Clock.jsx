import React from "react";
import clock from "../../public/clock.png";

const Clock = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row py-20 md:py-32 gap-10 justify-center items-center ">
      <div className="w-full md:w-1/2 md:order-1 order-2">
        <div className="space-y-12">
          <h1 className="text-4xl font-bold">
            Find your purchase history{" "}
            <span className="text-purple-500">here!</span>
          </h1>
          <p className="text-xl">
            Your purchase history provides a detailed record of all your past
            transactions, ensuring you never lose track of your orders.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex md:justify-end justify-center order-1 md:order2">
        <img src={clock} className="w-96 h-92" />
      </div>
    </div>
  );
};

export default Clock;
