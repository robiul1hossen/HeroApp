import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../../src/assets/logo.png";
import { Github } from "lucide-react";
import "./Navbar.css";

const menuItem = (
  <>
    <NavLink to="/">
      <li className="">Home</li>
    </NavLink>
    <NavLink to="/apps">
      <li className="">Apps</li>
    </NavLink>
    <NavLink to="installation">
      <li className="">Installation</li>
    </NavLink>
  </>
);

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menuItem}
            </ul>
          </div>
          <Link to="/" className=" flex gap-2 items-center">
            <img className="w-[30px] h-[30px]" src={logo} alt="" />
            <span className="font-bold text-xl bg-gradient-to-t from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
              {" "}
              Hero.Io
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal gap-6 ">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="px-3 py-2 rounded-lg bg-gradient-to-t from-[#632EE3] to-[#9F62F2]  flex gap-1 text-white font-semibold"
            to="https://github.com/robiul1hossen">
            <Github className="text-white" fill="white" stroke="white" />{" "}
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
