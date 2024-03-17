import React from "react";
import CategoriesCard from "./CategoriesCard";

const ProductCategories = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          5+ Product Categories
        </h1>
        <p className="text-gray-400 mb-6">
          Wide range of product categories with products listed by verified
          sellers on your campus
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <CategoriesCard
          title="Resume Optimizer"
          description="First impressions matter. Craft a standout resume with PathFinder's feedback and optimization tool, helping you land your dream job"
          imageUrl="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892483.jpg"
        />
        <CategoriesCard
          title="Careerpath"
          description=" Dive into our engaging quizzes and let our AI-driven internal assessment tool decode your unique profile effortlessly, while curating a roadmap"
          imageUrl="https://thumbs.dreamstime.com/b/parked-bikes-autumn-leaves-modern-mountain-locked-to-cycle-rack-fallen-ground-st-john-s-college-chapel-background-close-61768169.jpg"
        />
        <CategoriesCard
          title="Mattresses"
          description="Buying a new mattress can be expensive. Get a second hand one from your seniors"
          imageUrl="https://cdn.thewirecutter.com/wp-content/uploads/2020/07/best-mattress-2020-lowres-09221.jpg?auto=webp&quality=75&crop=3:2&width=1024"
        />
        <CategoriesCard
          title="Books and Notes"
          description="Worrying about CAT2 notes? Get it from someone who has already completed your course"
          imageUrl="https://cdn.thewirecutter.com/wp-content/media/2020/11/notebooks-2048px-1981-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
        />
      </div>
    </div>
  );
};

export default ProductCategories;
