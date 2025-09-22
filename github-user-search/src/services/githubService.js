import api from "./api";

// Advanced search using query params
export const searchUsers = async ({ username, location, repos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos}`;

  const response = await api.get(`/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};
