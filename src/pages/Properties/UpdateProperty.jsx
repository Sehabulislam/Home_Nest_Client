import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateProperty = () => {
  const { user } = useContext(AuthContext);
  const { _id, propertyName, price, location, category, image, description } =
    useLoaderData();
  console.log(_id, propertyName);
  const navigate = useNavigate();

  const handleUpdateProperty = (e) => {
    e.preventDefault();
    const form = e.target;
    const propertyName = form.name.value;
    const price = form.price.value;
    const image = form.propertyImage.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const updateProperty = {
      propertyName,
      price,
      image,
      location,
      category,
      description,
    };
    fetch(`https://homenest-server-kappa.vercel.app/myProperties/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          toast.success("Property updated successfully.");
          navigate("/myProperties");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="py-8 w-full max-w-3xl mx-auto">
        <div>
          <h2 className="text-4xl text-slate-900 text-center font-bold">
            Update Property
          </h2>
        </div>
        <form onSubmit={handleUpdateProperty} className="mt-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Property Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={propertyName}
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
                defaultValue={price}
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
                defaultValue={image}
                name="propertyImage"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Category
              </label>
              <select
                name="category"
                className="select w-full h-11"
                defaultValue={category}
              >
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
                defaultValue={location}
                placeholder="City, Country"
                className="w-full py-3 px-4 text-slate-800 bg-white border border-gray-300 focus:border-slate-900 text-sm outline-0 rounded-md"
              />
            </div>
            <div className="col-span-full">
              <label className="text-sm text-slate-900 font-medium mb-2 block">
                Description
              </label>
              <textarea
                placeholder="Highlight the best selling points: size, recent upgrades, unique features, and neighborhood details."
                rows="4"
                name="description"
                defaultValue={description}
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
