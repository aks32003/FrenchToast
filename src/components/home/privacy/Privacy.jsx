import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="flex flex-col text-center sm:flex-col sm:text-left md:flex-col md:text-left lg:flex-row lg:text-left xl:flex-row xl:text-left justify-evenly items-center mt-8 mb-6">
      <div>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold w-96 text-blue-600  mb-6">
          Feedback drives our success
        </h1>
        <p className="w-80 text-gray-400 mb-6">
          Your feedback is the key to our success. Your thoughts and insights are invaluable to us!
        </p>
        <Button
          className="w-full lg:w-fit xl:w-fit"
          gradientDuoTone="purpleToBlue"
          as={Link}
          to={"/support"}
        >
          Help us grow
        </Button>
      </div>
      <div>
        <img
          src={
            "bottom.svg"
          }
          alt="privacy spot store image"
          width="380px"
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Privacy;
