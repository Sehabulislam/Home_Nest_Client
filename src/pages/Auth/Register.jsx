import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div class="flex flex-col items-center justify-center py-10">
      <div class="p-6 sm:p-8 rounded-2xl bg-[url(./bg2.svg)] bg-cover bg-center border border-gray-200 shadow-sm">
        <h1 class="text-white text-center text-4xl font-semibold">
          Create your account
        </h1>
        <form class="mt-12 space-y-6">
          <div>
            <label class="text-white text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              name="username"
              type="text"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 placeholder-white"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label class="text-white text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              name="username"
              type="email"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label class="text-gray-700 text-sm font-medium mb-2">
              Your Photo URL
            </label>
            <input
              name="username"
              type="text"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your Photo URL"
            />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2">
              Your Password
            </label>
            <input
              name="password"
              type="password"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
              />
              <label
                for="remember-me"
                class="ml-3 block text-sm text-slate-900"
              >
                Remember me
              </label>
            </div>
          </div>

          <div class="!mt-12">
            <button
              type="button"
              class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-violet-800 hover:bg-blue-700 focus:outline-none cursor-pointer"
            >
              Sign in
            </button>
          </div>
          <p class="text-slate-900 text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
