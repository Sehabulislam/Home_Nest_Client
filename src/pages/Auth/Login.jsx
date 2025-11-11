import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const {signWithGoogle} = useContext(AuthContext);

  const handleSignWithGoogle = () =>{
    signWithGoogle()
    .then(result =>{
      console.log(result.user);
      toast.success('login seccess filll')
    })
    .error((error)=>{
      console.log(error);
    })
  }
  return (
    <div class="flex flex-col items-center justify-center py-10">
      <div class="p-6 sm:p-8 rounded-2xl bg-[url(./bg.svg)] bg-cover bg-center border border-gray-200 shadow-sm">
        <h1 class="text-white text-center text-4xl font-semibold">
          Sign in your account
        </h1>
        <form class="mt-12 space-y-6">
          <div>
            <label class="text-white text-sm font-medium mb-2">
              User email
            </label>
            <input
              name="username"
              type="text"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 placeholder-white"
              placeholder="Enter user email"
            />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              class="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter password"
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
            <div class="text-sm">
              <a href="" class="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-12">
            <button
              type="button"
              class="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none cursor-pointer"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleSignWithGoogle} className="btn bg-white text-black border-[#e5e5e5] w-full">
          <FcGoogle size={20} />
          Login with Google
        </button>
        <p class="text-slate-900 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            class="text-blue-600 hover:underline ml-1 whitespace-nowrap"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
