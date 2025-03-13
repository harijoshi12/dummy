// src/app/components/DealsTable.tsx
"use client";

import Image from "next/image";
import React from "react";

const DealsTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg  w-full">
      {/* Title */}

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm font-semibold uppercase">
              <th className="text-left py-3 px-4">Product Name</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Date - Time</th>
              <th className="text-left py-3 px-4">Piece</th>
              <th className="text-left py-3 px-4">Amount</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="">
              {/* Product Name with Image */}
              <td className="py-4 px-4 flex items-center space-x-3">
                <Image
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXM83ref_FV99_VW_34FR..."
                  alt="Apple Watch"
                  width={40} // specify width
                  height={40} // specify height
                  className="rounded-lg"
                />
                <span className="text-gray-800 font-medium">Apple Watch</span>
              </td>

              {/* Location */}
              <td className="py-4 px-4 text-gray-600">
                6096 Marjolaine Landing
              </td>

              {/* Date - Time */}
              <td className="py-4 px-4 text-gray-600">12.09.2019 - 12:53 PM</td>

              {/* Piece */}
              <td className="py-4 px-4 text-gray-600">423</td>

              {/* Amount */}
              <td className="py-4 px-4 text-gray-800 font-medium">$34,295</td>

              {/* Status */}
              <td className="py-4 px-4">
                <span className="bg-green-500 text-white px-4 py-1 text-sm rounded-full">
                  Delivered
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealsTable;
