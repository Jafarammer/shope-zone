import React from "react";
// react router  dom
import { Outlet } from "react-router-dom";
// component
import Navbar from "../components/Navbar";

function ShowLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ShowLayout;
