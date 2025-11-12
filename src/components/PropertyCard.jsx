import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const PropertyCard = ({ property }) => {
  const { propertyName, price, location, category, image, seller_Name } =
    property;
  return (
    <div className="card w-full md:w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-xl">
          <FaHome size={25} />
          {propertyName}
        </h2>
        <div className="flex justify-between items-center">
          <h3 className="flex items-center gap-1">
            <FaMapLocationDot size={15} />
            {location}
          </h3>
          <h3 className="flex items-center gap-1">
            <BiSolidCategoryAlt size={15} />
            {category}
          </h3>
        </div>
        <h1>
          Post By : <span className="text-gray-500">{seller_Name}</span>
        </h1>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center">
            <TbCurrencyTaka size={25} />
            {price}
          </h2>
          <button className="btn btn-neutral hover:bg-white hover:text-black">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
