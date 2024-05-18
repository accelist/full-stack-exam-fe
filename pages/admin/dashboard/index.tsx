import { WithAdminLayout } from "@/components/AdminLayout";
import { Page } from "@/types/Page";
import React from "react";

const AdminPage: Page = () => {
  return (
    <div className="w-full p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Tickets Sold</h2>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Showing Movies</h2>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Upcoming Movies</h2>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold">$45,678</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Profit</h2>
          <p className="text-2xl font-bold">$12,345</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Total Cinemas</h2>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>
    </div>
  );
};

AdminPage.layout = WithAdminLayout;
export default AdminPage;

