import axios from "axios";

const API_URL = "https://peer-project-hub-skr5.onrender.com";

//Project Calls

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/api/projects`);

  return response.data;
};

export const likeProject = async (id) => {
  const response = await axios.post(`${API_URL}/api/projects/${id}/like`);

  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post(`${API_URL}/api/projects`, projectData);

  return response.data;
};

export const getProjectById = async (id) => {
  const response = await axios.get(`${API_URL}/api/projects/${id}`);

  return response.data;
};

export const getProjectsByUserId = async (userId) => {
  const response = await axios.get(`${API_URL}/api/projects/user/${userId}`);

  return response.data;
};

export const deleteProjectById = async (projectId) => {
  const response = await axios.delete(`${API_URL}/api/projects/${projectId}`);

  return response.data;
};

export const updateProjectById = async (id, projectData) => {
  const response = await axios.put(
    `${API_URL}/api/projects/${id}`,
    projectData,
  );

  return response.data;
};

//Comment calls

export const getCommentsByProjectId = async (projectId) => {
  const response = await axios.get(`${API_URL}/api/comments/${projectId}`);

  return response.data;
};

export const createComment = async (projectId, firebaseUid, content) => {
  const response = await axios.post(`${API_URL}/api/comments/${projectId}`, {
    firebaseUid,
    content,
  });

  return response.data;
};

//User calls

export const createUser = async (firebaseUid, name, email) => {
  const response = await axios.post(`${API_URL}/api/user`, {
    firebaseUid,
    name,
    email,
  });

  return response.data;
};

export const fetchUser = async (firebaseUid) => {
  const response = await axios.get(`${API_URL}/api/user/${firebaseUid}`);

  return response.data;
};
