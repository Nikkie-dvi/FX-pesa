import { QuestionnaireResponse } from '../types/questionnaire';

const STORAGE_KEY = 'fxpesa_responses';
const ADMIN_KEY = 'fxpesa_admin_logged_in';

export const saveResponse = (response: QuestionnaireResponse): void => {
  const existingResponses = getResponses();
  const updatedResponses = [...existingResponses, response];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResponses));
};

export const updateResponse = (id: string, updates: Partial<QuestionnaireResponse>): void => {
  const existingResponses = getResponses();
  const updatedResponses = existingResponses.map(response => 
    response.id === id ? { ...response, ...updates } : response
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResponses));
};

export const getResponses = (): QuestionnaireResponse[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const deleteResponse = (id: string): void => {
  const existingResponses = getResponses();
  const filteredResponses = existingResponses.filter(response => response.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredResponses));
};

export const clearAllResponses = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const setAdminLoggedIn = (isLoggedIn: boolean): void => {
  if (isLoggedIn) {
    localStorage.setItem(ADMIN_KEY, 'true');
  } else {
    localStorage.removeItem(ADMIN_KEY);
  }
};

export const isAdminLoggedIn = (): boolean => {
  return localStorage.getItem(ADMIN_KEY) === 'true';
};

export const generateResponseId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};