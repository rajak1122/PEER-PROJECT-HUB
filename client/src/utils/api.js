import axios from "axios";

const API_URL = "http://localhost:5000";

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/api/projects`);

  return response.data;
};
