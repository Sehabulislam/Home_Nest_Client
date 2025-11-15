import React, { use, useContext, useState } from "react";
import PropertyCard from "../../components/PropertyCard";
import { HiHomeModern } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { AuthContext } from "../../context/AuthProvider";

const propertiesPromise = fetch(
  "https://homenest-server-kappa.vercel.app/allProperties"
).then((res) => res.json());

const AllProperties = () => {
  const { setLoading } = useContext(AuthContext);
  const allProperties = use(propertiesPromise);
  const [properties, setProperties] = useState(allProperties);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setLoading(true);
    fetch(
      `https://homenest-server-kappa.vercel.app/search?search=${searchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  };
  return (
    <div className="py-5">
      <h2 className="text-4xl font-bold flex justify-center items-center gap-2">
        <HiHomeModern size={43} />
        All Properties
      </h2>
      <div className="py-5 flex justify-center">
        <form onSubmit={handleSearch}>
          <label className="input rounded-l-xl">
            <IoSearch size={23} />
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button type="submit" className="btn btn-neutral rounded-r-xl">
            Search
          </button>
        </form>
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
