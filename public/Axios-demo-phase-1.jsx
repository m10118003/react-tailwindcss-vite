import axios from "axios";
import { useState, useEffect } from "react";
import App from "@/App";
import PropTypes from 'prop-types';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// const postBaseURL = "https://jsonplaceholder.typicode.com/posts";
// const putBaseURL = "https://jsonplaceholder.typicode.com/posts";
// const deleteBaseURL = "https://jsonplaceholder.typicode.com/posts";

// 未整理的 Axios 呼叫範例
const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

const GetPost = ({ onPostGet }) => {
    const getPost = () => {
        client.get("/1").then(response => onPostGet(response.data));
    }
    return (
        <button className="text-3xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-100 hover:bg-sky-200 hover:text-indigo-600" onClick={getPost}>Get Post</button>
    )
}
GetPost.propTypes = {
    onPostGet: PropTypes.func.isRequired,
}


const CreatePost = ({ onPostCreated }) => {
    const createPost = () => {
        client.post("", {
            title: 'Hello !',
            body: 'Hi body.'
        }).then(response => onPostCreated(response.data));
    }
    return (
        <button className="text-3xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-200 hover:bg-sky-200 hover:text-indigo-600" onClick={createPost}>Create Post</button>
    )
}
CreatePost.propTypes = {
    onPostCreated: PropTypes.func.isRequired,
}

const UpdatePost = ({ onPostUpdated }) => {
    const updatePost = () => {
        client.put("/1", {
            title: 'Meow Hello !',
            body: 'Meow body.'
        }).then(response => onPostUpdated(response.data));
    }
    return (
        <button className="text-3xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-300 hover:bg-green-300 hover:text-indigo-500" onClick={updatePost}>Update Post</button>
    )
}
UpdatePost.propTypes = {
    onPostUpdated: PropTypes.func.isRequired,
}

const DeletePost = ({ onPostDeleted }) => {
    const deletePost = () => {
        client.delete("/1", {
        }).then(response => {
            alert("Post deleted!")
            onPostDeleted(response.data)
        });
    }
    return (
        <button className="text-3xl font-black card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-400 hover:bg-yellow-400 hover:text-indigo-600" onClick={deletePost}>Delete Post</button>
    )
}
DeletePost.propTypes = {
    onPostDeleted: PropTypes.func.isRequired,
}

export default function AxiosDemo() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        client.get("/1").then((response) => {
            setPost(response.data);
        });
    }, []);

    // 定義 GetPost prop
    const handleGetPost = (getPost) => {
        setPost(getPost);
    }

    // 定義 CreatePost prop
    const handleCreatePost = (newPost) => {
        setPost(newPost); // 建立資料
    };

    // 定義 UpdatePost prop
    const handleUpdatePost = (updatedPost) => {
        setPost(updatedPost); // 更新資料
    }

    // 定義 DeletePost prop
    const handleDeletePost = (deletePost) => {
        setPost(deletePost); // 刪除資料
    }

    // 讀取畫面
    // if (!post) return null; // 整個畫面清空
    if (!post) return (
        <div>
            <p className="flex justify-center items-center"> {"Loading..."} </p>
        </div>
    );

    return (
        <div>
            <App />
            <main className="p-5">
                <h1 className="cursor-crosshair p-5 font-bold underline hover:rounded hover:bg-sky-200 hover:text-indigo-600">
                    Get data from an API
                </h1>
                <section className="p-5">
                    <GetPost onPostGet={handleGetPost} />
                    <CreatePost onPostCreated={handleCreatePost} />
                    <UpdatePost onPostUpdated={handleUpdatePost} />
                    <DeletePost onPostDeleted={handleDeletePost} />
                </section>
                <section className="text-left max-w-3xl mx-auto p-5">
                    <p className="mt-4 text-2xl font-black">{post.title}</p>
                    <p className="mt-4 text-2xl ">{post.body}</p>
                </section>
            </main>
        </div>
    );
}