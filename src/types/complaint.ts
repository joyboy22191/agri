export type ComplaintStatus = 'pending' | 'in-progress' | 'resolved' | 'rejected';

export interface Complaint {
  id: string;
  title: string;
  description: string;
  status: ComplaintStatus;
  createdAt: string;
  userId: string;
  category?: string;
  attachmentUrls?: string[];
  response?: {
    message: string;
    respondedBy: string;
    respondedAt: string;
  };
}