import React from 'react';
import PageHeader from '../../components/ui/PageHeader';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Admin Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Products Overview</h3>
          <p className="text-gray-600">Manage and monitor your product inventory</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Complaints</h3>
          <p className="text-gray-600">Handle customer issues and feedback</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <p className="text-gray-600">Monitor system performance and metrics</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;