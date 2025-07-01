export interface QuestionnaireResponse {
  id: string;
  timestamp: string;
  responses: {
    isReady: boolean;
    communicationMode: 'online' | 'oral' | 'facebook' | null;
    fundPurpose: 'investment' | 'emergency' | 'debt' | 'other' | null;
    validationDetails: {
      name: string;
      number: string;
      country: string;
      zone: string;
    };
    contactDetails: {
      name: string;
      phoneNumber: string;
      country: string;
      jobOccupation: string;
      email: string;
    };
    selectedPromotion: number | null;
    paymentMethod?: string;
    transactionId?: string;
    receiptUploaded?: boolean;
    deliveryMethod: 'mtn' | 'bank' | null;
  };
  status: 'in-progress' | 'completed';
}

export interface AdminUser {
  username: string;
  password: string;
}