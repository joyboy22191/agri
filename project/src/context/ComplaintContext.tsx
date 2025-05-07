import React, { createContext, useContext, useState, useEffect } from 'react';
import { Complaint, ComplaintStatus } from '../types/complaint';
import { useAuth } from './AuthContext';
import { mockComplaints } from '../data/mockData';

interface ComplaintContextProps {
  complaints: Complaint[];
  userComplaints: Complaint[];
  isLoading: boolean;
  error: string | null;
  addComplaint: (complaint: Omit<Complaint, 'id' | 'status' | 'createdAt' | 'userId'>) => void;
  updateComplaintStatus: (id: string, status: ComplaintStatus) => void;
  getComplaintById: (id: string) => Complaint | undefined;
}

const ComplaintContext = createContext<ComplaintContextProps | undefined>(undefined);

export const useComplaints = () => {
  const context = useContext(ComplaintContext);
  if (!context) {
    throw new Error('useComplaints must be used within a ComplaintProvider');
  }
  return context;
};

export const ComplaintProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    const loadComplaints = async () => {
      try {
        // In a real app, this would be an API call
        // For demo purposes, we're using mock data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setComplaints(mockComplaints);
      } catch (err) {
        setError('Failed to load complaints');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadComplaints();
  }, []);

  // Filter complaints for the current user
  const userComplaints = user 
    ? complaints.filter(complaint => complaint.userId === user.id)
    : [];

  const addComplaint = (complaintData: Omit<Complaint, 'id' | 'status' | 'createdAt' | 'userId'>) => {
    if (!user) {
      setError('You must be logged in to submit a complaint');
      return;
    }

    const newComplaint: Complaint = {
      id: Math.random().toString(36).substring(2, 9),
      ...complaintData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      userId: user.id,
    };

    setComplaints(prev => [...prev, newComplaint]);
  };

  const updateComplaintStatus = (id: string, status: ComplaintStatus) => {
    setComplaints(prev => 
      prev.map(complaint => 
        complaint.id === id ? { ...complaint, status } : complaint
      )
    );
  };

  const getComplaintById = (id: string) => {
    return complaints.find(complaint => complaint.id === id);
  };

  return (
    <ComplaintContext.Provider 
      value={{ 
        complaints, 
        userComplaints,
        isLoading, 
        error, 
        addComplaint,
        updateComplaintStatus,
        getComplaintById
      }}
    >
      {children}
    </ComplaintContext.Provider>
  );
};