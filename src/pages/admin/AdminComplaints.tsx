import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { useComplaints } from '../../context/ComplaintContext';

const AdminComplaints = () => {
  const { complaints } = useComplaints();

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader title="Customer Complaints" />
      <div className="bg-white rounded-lg shadow-md">
        {complaints.map((complaint) => (
          <div key={complaint.id} className="border-b last:border-b-0 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold">{complaint.subject}</h3>
                <p className="text-sm text-gray-500">From: {complaint.userEmail}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                complaint.status === 'resolved' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {complaint.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{complaint.description}</p>
            <div className="flex gap-4">
              <button className="text-blue-600 hover:text-blue-800">
                Respond
              </button>
              {complaint.status !== 'resolved' && (
                <button className="text-green-600 hover:text-green-800">
                  Mark as Resolved
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminComplaints;