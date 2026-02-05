import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";

import Footer from "../Components/Footer/Footer";

const AuthLayout = () => {
  return (
    <>
      <div className="bg-base-200 min-h-screen">
        <header className="mx-w-[1280px] mx-auto ">
          <Navbar></Navbar>
        </header>
        <main className="w-11/12 mx-auto py-5">
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AuthLayout;
