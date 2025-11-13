import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";

const PropertyCard = ({ property }) => {
  const { propertyName, price, location, category, _id, image, seller_Name } =
    property;
  return (
    <div className="card w-full shadow-sm">
      <div
        className="h-70 bg-no-repeat bg-cover bg-center rounded-t-md relative"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="p-4">
        <div className="card-bod space-y-2">
          <h2 className="card-title text-xl text-center lg:text-start">
            <FaHome size={23} className="hidden lg:block" />
            {propertyName}
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
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
          <div className="flex justify-between items-center gap-2">
            <h2 className="text-lg lg:text-xl font-bold flex items-center">
              <TbCurrencyTaka size={25} />
              {price}
            </h2>
            <Link
              to={`/propertyDetails/${_id}`}
              className="btn btn-neutral hover:bg-white hover:text-black"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
