import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.gptSearchView);
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

  const handleGptSearchBtn = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-screen px-4 py-2 bg-gradient-to-b from-black absolute top-0 left-0 flex justify-between z-10">
      <img src={LOGO} alt="app logo" className="w-44" />
      {user && (
        <div className="p-2 m-2 flex justify-center">
          {/* <p className="p-2 mx-1 text-lg text-white">Hi {displayName}</p> */}
          {showGptSearch && (
            <select
              className="px-2 text-xs h-8 bg-gray-900 text-white mx-1"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white text-xs bg-gray-900 w-20 h-8 border rounded-lg mx-2 px-1"
            onClick={handleGptSearchBtn}
          >
            {showGptSearch ? "Home" : "Search"}
          </button>
          <img className="w-8 h-8" src={USER_AVATAR} alt="user-logo" />
          <button
            className="text-white  text-xs bg-gray-900 w-24 h-8 border rounded-lg mx-2 px-1"
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
