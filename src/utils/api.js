import axios from "axios";

const API = axios.create({
  baseURL: "https://hackathon-backend-production-a139.up.railway.app/", 
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Get token from localStorage
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;