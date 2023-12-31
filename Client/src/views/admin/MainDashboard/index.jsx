import React from "react";
import DashboardStatsGrid from "./components/DashboardStatsGrid.jsx";

import WeeklyRevenue from "./components//total spent";
import BuyerProfilePieChart2 from "./components//BuyerProfilePieChart copy";

export default function Dashboard() {
  return (
    <div>
      <div>
        <DashboardStatsGrid />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <BuyerProfilePieChart2 />
        <WeeklyRevenue />
      </div>
    </div>
  );
}
