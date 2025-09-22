import axios from "axios";
import api from "./api";

// Fetch GitHub user data by username
export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
axios
https://api.github.com