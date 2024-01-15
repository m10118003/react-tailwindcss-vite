// 專門處裡與 post 相關的 API request
import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const getPost = (id) => client.get(`/${id}`);
const createPost = (postData) => client.post("", postData);
// const updatePost = (id, postData) => client.put(`/${id}`, postData);
const updatePost = (postData) => client.put(`/1`, postData);
const deletePost = (id) => client.delete(`/${id}`);

export { getPost, createPost, updatePost, deletePost };
