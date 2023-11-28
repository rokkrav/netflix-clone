import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  // const { displayName } = user;

  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="w-screen px-4 py-2 bg-gradient-to-b from-black absolute top-0 left-0 flex justify-between z-10">
      <img src={LOGO} alt="app logo" className="w-44" />
      {user && (
        <div className="p-2 m-2 flex justify-center">
          {/* <p className="p-2 mx-1 text-lg text-white">Hi {displayName}</p> */}
          <img className="w-8 h-8" src={USER_AVATAR} alt="user-logo" />
          <button
            className="text-white  text-xs bg w-16 h-8 border rounded-lg mx-2 px-1"
            onClick={handleSignOutBtn}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
