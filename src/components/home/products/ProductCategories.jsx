import React from "react";
import CategoriesCard from "./CategoriesCard";

const ProductCategories = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          All We Offer And More
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        <CategoriesCard
          title="Resume Optimizer"
          description="First impressions matter. Craft a standout resume with PathFinder's feedback and optimization tool, helping you land your dream job"
          imageUrl="public\firstproduct.jpeg"
        />
        <CategoriesCard
          title="Roadmap"
          description=" Dive into our engaging quizzes and let our AI-driven internal assessment tool decode your unique profile effortlessly, while curating a roadmap"
          imageURL="public\roadmap.jpeg"
        />
        <CategoriesCard
          title="JD Match"
          description="Our AI recommendation engine verifies if your resume aligns with your target job, saving time and keeping you ahead in today's competitive market."
          imageUrl="public\jdmatch.jpeg"
        />
        <CategoriesCard
          title="Interview Prep"
          description="Chill those cold feet on your big day! Access tailored resources, mock interviews, and AI feedback to conquer the fear of the unknown."
          imageUrl="https://cdn.thewirecutter.com/wp-content/media/2020/11/notebooks-2048px-1981-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
        />
      </div>
    </div>
  );
};

export default ProductCategories;
