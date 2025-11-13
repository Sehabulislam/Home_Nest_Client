import React from "react";
import { Link } from "react-router";

const MyProperties = () => {
  return (
    <div className="py-8">
      <h2 className="text-4xl font-bold text-center">My Properties</h2>
      <div className="overflow-x-auto py-5">
        <table className="table">
          {/* head */}
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>Wyman-Ledner</td>
              <td>20000</td>
              <th>
                <button>Chattogram</button>
              </th>
              <td>
                <button>11/13/2025</button>
              </td>
              <td className="flex gap-2">
                <Link to={`/updataProperty`} className="btn btn-neutral hover:bg-white hover:text-black">Update</Link>
                <button className="btn btn-outline btn-error hover:text-white">Delete</button>
              </td>
            </tr>
            {/* row 2 */}
           <tr>
              <th>2</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>Wyman-Ledner</td>
              <td>20000</td>
              <th>
                <button>Chattogram</button>
              </th>
              <td>
                <button>11/13/2025</button>
              </td>
              <td className="flex gap-2">
                <Link to={`/updataProperty`} className="btn btn-neutral hover:bg-white hover:text-black">Update</Link>
                <button className="btn btn-outline btn-error hover:text-white">Delete</button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>Wyman-Ledner</td>
              <td>20000</td>
              <th>
                <button>Chattogram</button>
              </th>
              <td>
                <button>11/13/2025</button>
              </td>
              <td className="flex gap-2">
                <Link to={`/updataProperty`} className="btn btn-neutral hover:bg-white hover:text-black">Update</Link>
                <button className="btn btn-outline btn-error hover:text-white">Delete</button>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>4</th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>Wyman-Ledner</td>
              <td>20000</td>
              <th>
                <button>Chattogram</button>
              </th>
              <td>
                <button>11/13/2025</button>
              </td>
              <td className="flex gap-2">
                <Link to={`/updataProperty`} className="btn btn-neutral hover:bg-white hover:text-black">Update</Link>
                <button className="btn btn-outline btn-error hover:text-white">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProperties;

// Property Name

// Category

// Price

// Location

// Posted Date

// Update / Delete / View Details Button

// Update করলে Edit পেজ/Modal খুলবে।
// 👉 Delete করলে SweetAlert দিয়ে কনফার্মেশনের পর ডিলিট হবে।
// 👉 ডিলিটের পর UI সাথে সাথে আপডেট হবে।
