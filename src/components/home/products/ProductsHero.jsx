import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse xl:flex-row-reverse items-center justify-evenly text-center sm:text-left md:text-left lg:text-left xl:text-left mb-6">
      <div>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold w-96 text-blue-600  mb-6">
          Selling On Campus Made Easy By Spot Store
        </h1>
        <p className="w-80 text-gray-400 mb-6">
          Not using the products that you bought anymore? List your products on
          Spot Store and sell them easily
        </p>
        <Button
          className="w-full lg:w-fit xl:w-fit"
          gradientDuoTone="purpleToBlue"
          as={Link}
          to={"/user/product/create"}
        >
          Sell your product
        </Button>
      </div>
      <div>
        <img
          src={
            "landingleft.svg"
          }
          alt="hero logo"
          width="425px"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default ProductsHero;
