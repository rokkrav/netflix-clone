import React from "react";

import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // const { displayName } = user;

  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="w-screen px-4 py-2 bg-gradient-to-b from-black absolute top-0 left-0 flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="app logo"
        className="w-44"
      />
      {user && (
        <div className="p-2 m-2 flex justify-center">
          {/* <p className="p-2 mx-1 text-lg text-white">Hi {displayName}</p> */}
          <img
            className="w-8 h-8"
            src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="login-logo"
          />
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
