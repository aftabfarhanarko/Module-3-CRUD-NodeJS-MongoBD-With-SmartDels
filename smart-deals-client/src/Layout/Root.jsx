import React, { useContext } from "react";
import Home from "../Pages/Home";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContex } from "../Context/AuthContex";
import Loder from "../components/Loder";

const Root = () => {
  const { loding } = useContext(AuthContex);
  return (
    <div>
      <nav className="bg-base-100 shadow-sm">
        <Navbar></Navbar>
      </nav>
      <main>{loding ? <Loder></Loder> : <Outlet></Outlet>}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
