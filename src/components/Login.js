import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const signToggle = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-black md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <Header />
      {/* <div className="hidden lg:block bg-cover  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
        <img src="" alt="bg-img" />
      </div> */}
      <form className=" bg-black w-9/12 md:w-4/12  text-white p-12 bg-opacity-80">
        <h1 className="font-bold text-3xl my-2 py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-sm bg-neutral-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm  bg-neutral-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm bg-neutral-700"
        />
        <button className="py-4 mt-8 mb-2 rounded-sm font-semibold bg-red-700 w-full">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-normal mt-2 cursor-pointer text-slate-400"
          onClick={signToggle}
        >
          {signIn
            ? "New to Netflix, Sign Up Now."
            : "Already user, Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
