import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AddProperty = () => {
    const {user} = useContext(AuthContext);
    const handleAddProperty = (e)=>{
        e.preventDefault();
        const form = e.target;
        const propertyName = form.name.value;
        const propertyPrice = form.price.value;
        const propertyImage = form.propertyImage.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const location = form.location.value;
        const description = form.description.value;
        console.log(propertyName,propertyPrice,propertyImage,email,sellerName,sellerEmail,location,description);
    }
  return (
    <div>
      <div className="py-8 w-full max-w-3xl mx-auto">
        <div>
          <h2 className="text-4xl text-slate-900 text-center font-bold">
            Add New Properties
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
            <div className="col-span-full">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="col-span-full">
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
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                User Name
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
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
                placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... "
                rows="6"
                name="description"
                className="w-full px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm pt-3 outline-0 rounded-md"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-black text-white hover:bg-white hover:text-black  text-sm px-4 py-3 w-full rounded-md cursor-pointer mt-6"
          >
            Create a Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
