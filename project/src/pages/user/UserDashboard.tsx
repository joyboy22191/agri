import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { useAuth } from '../../context/AuthContext';

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title={`Welcome back, ${user?.name || 'User'}!`}
        description="Manage your account and view your recent activity"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            <p className="text-gray-600">No recent orders found.</p>
          </div>
        </div>

        {/* Account Overview */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Overview</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600">Member since: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              View Orders
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded hover:bg-gray-200 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;