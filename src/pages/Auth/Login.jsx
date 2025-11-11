import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate} from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  const {signWithGoogle,signInUser,setUser} = useContext(AuthContext);
  const handleSignInUser = (e)=>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email,password);
      signInUser(email,password)
      .then(result =>{
        setUser(result.user);
        // console.log(result.user);
        toast.success("Your Account Create Successfully.")
        navigate('/')
      }).catch(error =>{
        toast.error(error.message);
      })
    }

  const handleSignWithGoogle = () =>{
    signWithGoogle()
    .then(result =>{
      setUser(result.user);
      toast.success('Sign In with Google Successfully.');
      navigate('/')
    })
    .error((error)=>{
      toast.error(error.message);
    })
  }
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="p-6 sm:p-8 rounded-2xl bg-[url(./bg.svg)] bg-cover bg-center border border-gray-200 shadow-sm">
        <h1 className="text-white text-center text-4xl font-semibold">
          Sign in your account
        </h1>
        <form onSubmit={handleSignInUser} className="mt-12 space-y-6">
          <div>
            <label className="text-white text-sm font-medium mb-2">
              User email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600 placeholder-white"
              placeholder="Enter user email"
            />
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
              placeholder="Enter password"
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
                className="ml-3 block text-sm text-slate-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="w-full py-2 px-4 text-[15px] font-medium tracking-wide rounded-md text-white bg-indigo-500 hover:bg-blue-700 focus:outline-none cursor-pointer"
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
        <p className="text-slate-900 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-blue-600 hover:underline ml-1 whitespace-nowrap"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
