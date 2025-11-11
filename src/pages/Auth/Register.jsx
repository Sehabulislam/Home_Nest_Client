import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="p-6 sm:p-8 rounded-2xl bg-[url(./bg2.svg)] bg-cover bg-center border border-gray-200 shadow-sm">
        <h1 className="text-white text-center text-4xl font-semibold">
          Create your account
        </h1>
        <form className="mt-10 space-y-6">
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
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2">
              Your Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label
                for="remember-me"
                className="ml-3 block text-sm text-slate-900"
              >
                I accept the{" "}
                <span className="text-blue-500 hover:underline ">
                  Terms and Conditions
                </span>
              </label>
            </div>
          </div>

          <div className="">
            <button
              type="button"
              className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-violet-800 hover:bg-blue-700 focus:outline-none cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button className="btn bg-white text-black border-[#e5e5e5] w-full">
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
