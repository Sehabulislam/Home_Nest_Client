import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MyProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const axiosInstance = useAxios();
  useEffect(() => {
    if (user?.email) {
      axios(
        `https://homenest-server-kappa.vercel.app/myProperties?email=${user.email}`
      ).then((data) => {
        setProperties(data.data);
      });
    }
  }, [user?.email]);

  const handlePropertyDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance(`/myProperties/${_id}`, {
          method: "DELETE",
        }).then((data) => {
          if (data.data.deletedCount == 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your property has been deleted.",
              icon: "success",
            });
            const remainingProperty = properties.filter(
              (property) => property._id !== _id
            );
            setProperties(remainingProperty);
          }
        });
      }
    });
  };
  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-center">My Properties</h2>
      <div className="overflow-x-auto py-5">
        <table className="table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Property Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Posted Date</th>
              <th>Update / Delete</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property, index) => (
              <tr key={property._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{property.propertyName}</div>
                    </div>
                  </div>
                </td>
                <td>{property.category}</td>
                <td>{property.price} TK</td>
                <th>
                  <h1>{property.location}</h1>
                </th>
                <td>
                  <h1>{property.postedDate}</h1>
                </td>
                <td className="flex gap-2">
                  <Link
                    to={`/updateProperty/${property._id}`}
                    className="btn btn-neutral hover:bg-white hover:text-black"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handlePropertyDelete(property._id)}
                    className="btn btn-outline btn-error hover:text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProperties;
