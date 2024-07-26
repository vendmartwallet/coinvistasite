import React from "react";
import TransactionTable from "../transactiontable/TransactionTable";

const Dashboard = () => {
  const deposits = [
    { name: "maepalada", amount: 2000.0 },
    { name: "Diostebendigasiempre", amount: 2000.0 },
    { name: "stereosteffs", amount: 1000.0 },
    { name: "franciarodriguez123", amount: 2000.0 },
    { name: "ninabrown27", amount: 2000.0 },
    { name: "hellenvitoria", amount: 2000.0 },
    { name: "leighbienne", amount: 2000.0 },
    { name: "rivolov", amount: 1000.0 },
    { name: "zicynede", amount: 2000.0 },
    { name: "zuhametec", amount: 2000.0 },
  ];

  const withdrawals = [
    { name: "GEOFF", amount: 54.89 },
    { name: "ggy123", amount: 77.0 },
    { name: "Alex", amount: 5.5 },
    { name: "Ameliy", amount: 5.5 },
    { name: "Greco", amount: 7.92 },
    { name: "topgo5027", amount: 6.6 },
    { name: "olex0510", amount: 3.3 },
    { name: "wangjx", amount: 5.5 },
    { name: "nukenogeh", amount: 1000000.0 },
    { name: "zhyyt", amount: 6.6 },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 items-start py-10 lg:py-20 space-y-4 md:space-y-0 md:space-x-4">
      <TransactionTable title="Latest Deposit" transactions={deposits} />
      <TransactionTable title="Latest Withdrawals" transactions={withdrawals} />
    </div>
  );
};

export default Dashboard;
