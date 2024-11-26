// src/services/api.js
import axios from 'axios';

// Configure the axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL, // Base URL for the API
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to add authorization token to each request
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// API function to make a GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// API function to make a POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data", error);
    throw error;
  }
};

// Additional API functions for other HTTP methods (PUT, DELETE, etc.)

export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data", error);
    throw error;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data", error);
    throw error;
  }
};

// Export the axios instance for more advanced use cases if needed
export default api;
