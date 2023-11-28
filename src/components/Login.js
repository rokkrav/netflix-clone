import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const signToggle = () => {
    setSignIn(!signIn);
  };

  const handleSignInBtn = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);
    // const nameError = !signIn && checkValidateName(name.current.value);
    // setErrorMessage(nameError);
    if (message) return;
    if (!signIn) {
      // Sign Up Logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cover bg-black md:bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg')]">
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" bg-black w-10/12 md:w-4/12  text-white p-12 bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl my-2 py-4">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded-sm bg-neutral-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded-sm  bg-neutral-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded-sm bg-neutral-700"
        />
        <button
          className="py-4 mt-8 mb-2 rounded-sm font-semibold bg-red-700 w-full"
          onClick={handleSignInBtn}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 text-sm">{errorMessage}</p>
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
