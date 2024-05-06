import * as React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./components/Appbar.jsx";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Toaster position="top-center" />
      <div className="App pb-10">
        <Outlet />
      </div>
      <Navbar />
    </>
  );
}
