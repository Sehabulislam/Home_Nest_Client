import React from "react";

const UpdateProperty = () => {
  return (
    <div>
      <div className="py-8 w-full max-w-3xl mx-auto">
        <div>
          <h2 className="text-4xl text-slate-900 text-center font-bold">
            Update Property
          </h2>
        </div>
        <form onSubmit={[]} className="mt-8">
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
                // defaultValue={user?.displayName}/
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
                // defaultValue={user?.email}
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
            Update Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProperty;
