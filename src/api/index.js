import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// create an axios instance with a base url
const API = axios.create({ baseURL: API_URL });

// a function that is going to happen before each request
API.interceptors.request.use((req) => {
  /* This is needed to send our token to the server so the middleware can verify that we are logged in*/

  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// User authorization
export const signUp = (formData) => API.post("/users/signup", formData);
export const signIn = (formData) => API.post("/users/signin", formData);

// Blog posts
export const getBlogPosts = (queryParams) =>
  API.get(`/blog/posts${queryParams}`);
export const getOneBlogPost = (id) => API.get(`/blog/posts/${id}`);

// Forum threads
export const getThreads = (queryParams) =>
  API.get(`/forum/threads${queryParams}`);
export const createThread = (formData) => API.post("/forum/threads", formData);
export const getOneThread = (id) => API.get(`/forum/threads/${id}`);

// Thread comments
export const getThreadComments = (threadID) =>
  API.get(`/forum/threads/${threadID}/comments`);
export const createComment = (formData, threadID) =>
  API.post(`/forum/threads/${threadID}/comments`, formData);

// Skinfluencers
export const getSkinfluencers = () => API.get(`/skinfluencers`);

// K-beauty
export const getAllBrands = () => API.get(`/k-beauty/brands`);
export const getAllResellers = () => API.get(`/k-beauty/resellers`);
