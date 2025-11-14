import React, { use } from "react";
import PropertyCard from "../../components/PropertyCard";
import { HiHomeModern } from "react-icons/hi2";

const propertiesPromise = fetch("http://localhost:3000/allProperties").then(
  (res) => res.json()
);

const AllProperties = () => {
  const properties = use(propertiesPromise);
  return (
    <div className="py-5">
      <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
        <HiHomeModern size={43} />
        All Properties
      </h2>
      <div className="py-5 flex justify-between items-center gap-5">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property}></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
