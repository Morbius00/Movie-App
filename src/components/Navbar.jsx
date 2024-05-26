import React from "react";
import RedButton from "../common/Button";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-center m-10">
      <div className="flex flex-row justify-between px-10 py-2 h-auto w-[4000px] ">
        <div className="text-red-600 text-6xl font-bold">Movieflix</div>
        <div className="space-x-2">
          <RedButton to="/" className="mx-2">Movies</RedButton>
          <RedButton to="/favorites" className="mx-2">Favorites</RedButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
