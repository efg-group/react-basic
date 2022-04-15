import React from "react";
import { StarIcon } from "@heroicons/react/solid";
// import { StarIcon } from "@heroicons/react/outline";

import "./Rating.scss";

const Rating = ({ value, text }) => {
  return (
    <>
      <StarIcon
        className={
          value >= 0.5 ? "w-12 fill-[#ef1]" : value >= 1 ? "text-red-300" : ""
        }
      />
      {/* <StarIcon /> */}
    </>
  );
};

export default Rating;
