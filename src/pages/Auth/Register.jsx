import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImg2 from "../../assets/bg2.svg";

const Register = () => {
  const { signWithGoogle, setUser, createUser, userUpdateProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const passwordRegEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegEx.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        userUpdateProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            toast.success("Your Account Create Successfully.");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleSignUpWithGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Sign Up with Google Successfully.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className="p-6 sm:p-8 rounded-2xl shadow-sm"
        style={{
          backgroundImage: `url(${bgImg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-center text-4xl font-semibold">
          Create your account
        </h1>
        <form onSubmit={handleCreateUser} className="mt-10 space-y-6">
          <div>
            <label className="text-white text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 placeholder-white text-slate-100"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-white text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full text-black text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 placeholder-white"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-gray-700 text-sm font-medium mb-2">
              Your Photo URL
            </label>
            <input
              name="photo"
              type="url"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your Photo URL"
            />
          </div>
          <div className="relative">
            <label className="text-slate-900 text-sm font-medium mb-2">
              Your Password
            </label>
            <input
              name="password"
              type={show ? "password" : "text"}
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute top-10 right-4"
            >
              {show ? <FaEye size={17} /> : <FaEyeSlash size={17} />}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label className="ml-3 block text-sm text-slate-900">
                I accept the{" "}
                <span className="text-blue-500 hover:underline ">
                  Terms and Conditions
                </span>
              </label>
            </div>
          </div>

          <div className="">
            <button
              type="submit"
              className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-pink-700 hover:bg-pink-600 focus:outline-none cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button
          onClick={handleSignUpWithGoogle}
          className="btn bg-white text-black border-[#e5e5e5] w-full"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>
        <p className="text-slate-900 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
