import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-8 text-white">
      <nav className="flex items-center gap-4">
        <img src="./netflix.png" alt="Logo" className="w-16 sm:w-28" />
        <a href="#">Phim</a>
        <a href="#">Truyền hình</a>
      </nav>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
