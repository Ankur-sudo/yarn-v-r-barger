import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  // Filter type burger/pizza/et

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // filter price

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" mx-w-[1640px] m-auto px-4 py-12 ">
      <h1 className="text-xl font-bold text-center text-orange-600">
        Top rated menu items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Filter Type */}
        <div className="">
          <p className="font-bold text-gray-700">Filter type</p>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFoods(data)}
              className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter prize */}
        <div className="">
          <p>Filter Price</p>
          <button onClick={() => filterPrice('$')}className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white">
            $
          </button>
          <button onClick={()=> filterPrice('$$')} className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white">
            $$
          </button>
          <button onClick={()=> filterPrice('$$$')} className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white">
            $$$
          </button>
          <button onClick={()=> filterPrice('$$$$')} className="m-1 text-orange-600 border border-orange-600 rounded hover:bg-orange-600 hover:text-white">
            $$$
          </button>
        </div>
      </div>
      {/* Display food */}
      <div className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="duration-300 border rounded-lg shadow-lg hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
