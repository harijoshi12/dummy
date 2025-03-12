// src/components/DealsTable.tsx
import React from "react";

export default function DealsTable() {
  const deals = [
    {
      company: "Apple Watch",
      stage: "Negotiation",
      amount: "$2,500",
      closeDate: "2023-12-01",
    },
    {
      company: "Google Pixel",
      stage: "Proposal",
      amount: "$1,800",
      closeDate: "2023-11-15",
    },
    {
      company: "Samsung Galaxy",
      stage: "Contract Sent",
      amount: "$3,200",
      closeDate: "2023-10-30",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-bold mb-4">Deals Details</h2>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-2">Company</th>
            <th className="py-2">Stage</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Close Date</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-2">{deal.company}</td>
              <td className="py-2">{deal.stage}</td>
              <td className="py-2">{deal.amount}</td>
              <td className="py-2">{deal.closeDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
