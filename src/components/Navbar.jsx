import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user,setUser,signOutUser } = useContext(AuthContext);
  const handleSignOut =()=>{
    signOutUser()
    .then(()=>{
      setUser(null);
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/allProperties"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        All Properties
      </NavLink>
      <NavLink
        to={"/myProperties"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        My Properties
      </NavLink>
      <NavLink
        to={"/myRatings"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        My Ratings
      </NavLink>
      <NavLink
        to={"/addProperties"}
        className={({ isActive }) =>
          isActive ? "font-semibold border-b-2" : "text-gray-500"
        }
      >
        Add Properties
      </NavLink>
    </>
  );
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 md:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className="text-2xl font-bold">.Home Nest</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || 'https://st2.depositphotos.com/3336339/8196/i/450/depositphotos_81969890-stock-photo-red-chaotic-cubes-wall-background.jpg'}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-60 p-2 shadow gap-3"
              >
                <li className="text-xl font-bold">{user?.displayName || "Your Name"}</li>
                <li className="font-semibold text-wrap">{user?.email}</li>
                <li>
                  <button onClick={handleSignOut} className="btn btn-soft btn-error hover:text-white">
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="px-4 py-2 text-md rounded-3xl cursor-pointer text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="px-4 py-2 text-md rounded-3xl cursor-pointer text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
