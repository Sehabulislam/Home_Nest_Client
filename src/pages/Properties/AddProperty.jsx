import React, { use, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const propertiesPromise = fetch(
  "https://homenest-server-hcpj3tua8-sehabul-islams-projects.vercel.app/allProperties"
).then((res) => res.json());

const AddProperty = () => {
  const intialProperties = use(propertiesPromise);
  const [properties, setProperties] = useState(intialProperties);
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const handleAddProperty = (e) => {
    e.preventDefault();
    const form = e.target;
    const propertyName = form.name.value;
    const price = form.price.value;
    const image = form.propertyImage.value;
    const seller_Name = form.sellerName.value;
    const seller_Email = form.sellerEmail.value;
    const location = form.location.value;
    const seller_Photo = user.photoURL;
    const category = form.category.value;
    const description = form.description.value;
    const postedDate = new Date().toISOString().split("T")[0];
    const newProperty = {
      propertyName,
      price,
      location,
      category,
      image,
      postedDate,
      seller_Name,
      seller_Email,
      seller_Photo,
      description,
    };
    axiosInstance.post("/allProperties", newProperty).then((data) => {
      if (data.data.insertedId) {
        newProperty._id = data.data.insertedId;
        toast.success("Properties created successfully.");
        navigate("/allProperties");
        const property = [...properties, newProperty];
        setProperties(property);
      }
    });
  };
  return (
    <div>
      <div className="py-8 w-full max-w-3xl mx-auto">
        <div>
          <h2 className="text-4xl text-slate-900 text-center font-bold">
            Add New Property
          </h2>
        </div>
        <form onSubmit={handleAddProperty} className="mt-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Property Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your property name"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Your property price"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Property Image Link
              </label>
              <input
                type="url"
                placeholder="https://..."
                name="propertyImage"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Category
              </label>
              <select name="category" className="select w-full h-11">
                <option disabled={true}>Select Category</option>
                <option>Rent</option>
                <option>Sale</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                User Name
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                readOnly
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                User Email
              </label>
              <input
                type="text"
                name="sellerEmail"
                defaultValue={user?.email}
                readOnly
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="City, Country"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Description
              </label>
              <textarea
                placeholder="E.g., Describe the property's key features (e.g., 3 bedrooms, modern kitchen), amenities (e.g., gym, pool, security), and location advantages (e.g., near schools, city center, main road access)."
                rows="4"
                name="description"
                className="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-black text-white hover:bg-white hover:text-black  text-sm px-4 py-3 w-full rounded-md cursor-pointer mt-6"
          >
            Create a new property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
