import React from "react";

const TransactionTable = ({ title, transactions }) => {
  return (
    <div className="w-full max-w-md rounded-lg shadow-md overflow-hidden">
      <div className="bg-[#E2CC6D] p-4">
        <h2 className="text-center text-xl text-white font-bold">{title}</h2>
      </div>
      <table className="w-full text-left">
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{transaction.name}</td>
              <td className="py-2 px-4 text-right">
                ${transaction.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
