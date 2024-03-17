import React from "react";
import Hero from "./hero/Hero";
import ProductsHero from "./products/ProductsHero";
import ProductCategories from "./products/ProductCategories";
import Privacy from "./privacy/Privacy";
import Questionnaire from "../utils/questionnaire";
// import PopularProducts from "./products/PopularProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsHero />
      <ProductCategories />
      <Privacy />
    </>
  );
};

export default Home;
