"use client";

import React from "react";
import MainNavbar from "./MainNavbar";
import SubNavbar from "./SubNavbar";

export default function Navbar() {
  return (
    <div className="w-full">
      <MainNavbar />
      <SubNavbar />
    </div>
  );
}
