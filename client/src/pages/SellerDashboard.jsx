import React from "react";
import DashboardSidebar from "../componenets/DashboardSidebar";
import PhotoManagement from "../componenets/seller/PhotoManagement";

const SellerDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>{/* we will change the pages through switch case here */}</div>
      <PhotoManagement />
    </div>
  );
};

export default SellerDashboard;
