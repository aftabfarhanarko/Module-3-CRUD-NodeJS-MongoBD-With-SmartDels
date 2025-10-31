import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import "../index.css";
import { AuthContex } from "../Context/AuthContex";

const Navbar = () => {
  const { logOutUser, user } = useContext(AuthContex);
  // console.log(user)
  const link = (
    <div className="text-[16px] font-medium">
      <NavLink to="/" className="ml-3">
        Home
      </NavLink>
      <NavLink to="/allproduct" className="ml-3">
        All Products
      </NavLink>
      <NavLink to="/myproducat" className="ml-3">
        My Products
      </NavLink>
      <NavLink to="/mybids" className="ml-3">
        My Bids
      </NavLink>
      <NavLink to="/creatProducat" className="ml-3">
        Create Product
      </NavLink>
    </div>
  );

  const handelLogOut = () => {
     logOutUser();
  }
 
  return (
    <div>
      <div className="navbar  w-11/12 mx-auto ">
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
              {link}
            </ul>
          </div>
          <a className=" font-bold text-2xl">
            Smart<span className="text-primary">Deals</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
        {
          user ?   
            <button onClick={handelLogOut} className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Logout</button>
          : <div> 
            <Link to="/login">
            {" "}
            <button className="btn btn-outline btn-primary">Login</button>
          </Link>
          <Link to="/register">
            {" "}
            <button className="ml-2 btn  text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
              Register
            </button>
          </Link>
          </div>
        }

       
        </div>
      </div>
    </div>
  );
};

export default Navbar;
