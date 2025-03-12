// src/components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-primary px-4 py-3 text-white">
      <div className="font-bold text-lg">GREGGS</div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-primary px-3 py-1 rounded-md">
          My Profile
        </button>
        <div className="h-8 w-8 bg-white rounded-full" />
      </div>
    </nav>
  );
}
