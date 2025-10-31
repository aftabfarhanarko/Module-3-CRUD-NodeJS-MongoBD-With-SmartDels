import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContex } from "../Context/AuthContex";
import Footer from "./Footer";
import Loder from "./Loder";
import { Outlet } from "react-router";

const MyBids = () => {
  const { loding } = useContext(AuthContex);
  return (
    <div>
      <nav className=' className="bg-base-100 shadow-sm'>
        <Navbar></Navbar>
      </nav>
      <main>{loding ? <Loder></Loder> : <Outlet></Outlet>}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MyBids;
