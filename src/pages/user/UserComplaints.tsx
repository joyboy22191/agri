import React from 'react';
import PageHeader from '../../components/ui/PageHeader';

const UserComplaints = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Your Complaints"
        description="View and manage your submitted complaints"
      />

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            {/* New Complaint Form */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Submit New Complaint</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Submit Complaint
                </button>
              </form>
            </div>

            {/* Complaints List */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Previous Complaints</h3>
              <div className="space-y-4">
                <p className="text-gray-600">No complaints found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComplaints;