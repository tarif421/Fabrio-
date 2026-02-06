import React from "react";
import { GiRolledCloth } from "react-icons/gi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#192586] font-semibold" : "hover:text-[#27379b]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProducts"
          className={({ isActive }) =>
            isActive ? "text-[#192586] font-semibold" : "hover:text-[#27379b]"
          }
        >
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-[#27379b] font-semibold" : "hover:text-[#27379b]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-event"
          className={({ isActive }) =>
            isActive ? "text-[#27379b] font-semibold" : "hover:text-[#27379b]"
          }
        >
          About US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-event"
          className={({ isActive }) =>
            isActive ? "text-[#27379b] font-semibold" : "hover:text-[#27379b]"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <span className="text-4xl text-[#192586]">
          <GiRolledCloth />
        </span>
        <p className=" font-serif text-3xl font-bold text-[#192586]">Fabrio</p>
      </div>
      <div className="navbar-center ml-60 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end ml-50">
        <Link to="/auth/register">
          <a className="btn bg-[#192586] text-[#ffffff]">Register</a>
        </Link>
      </div>
      <div className="navbar-end ">
        <Link to="/auth/login">
          {" "}
          <a className="btn bg-[#192586] text-[#ffffff]">Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
