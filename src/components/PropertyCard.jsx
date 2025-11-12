import React from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbCurrencyTaka } from "react-icons/tb";

const PropertyCard = ({ property }) => {
  const { propertyName, price, location, category, image, seller_Name } =
    property;
  return (
   <div className="card w-full shadow-sm">
     <div className="h-80 bg-[url(https://images.unsplash.com/photo-1762545112336-646c69e4888b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-no-repeat bg-cover bg-center rounded-t-md">
      <figure>
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl text-center lg:text-start">
          <FaHome size={23} className="hidden lg:block"/>
          {propertyName}
        </h2>
      </div>
    </div>
    <div className="p-4 space-y-2">
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
          <button className="btn btn-neutral hover:bg-white hover:text-black">
            See Details
          </button>
        </div>
    </div>
   </div>
  );
};

export default PropertyCard;
