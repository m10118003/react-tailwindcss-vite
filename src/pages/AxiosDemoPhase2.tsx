import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "@/api/axiosPostService";
import { useState, useEffect, MouseEvent } from "react";
import App from "@/App";
// import PropTypes from 'prop-types';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// const postBaseURL = "https://jsonplaceholder.typicode.com/posts";
// const putBaseURL = "https://jsonplaceholder.typicode.com/posts";
// const deleteBaseURL = "https://jsonplaceholder.typicode.com/posts";

interface ActButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

interface PostDataProps {
  title: string;
  body: string;
}

// 整理的 Axios 呼叫範例
const ActionButton = ({ onClick, children, className }: ActButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
// ActionButton.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
//     className: PropTypes.string,
// };

export default function AxiosDemo() {
  const [post, setPost] = useState<PostDataProps | null>(null);
  useEffect(() => {
    getPost(1).then((response) => {
      setPost(response.data);
    });
  }, []);

  // 定義 GetPost prop
  const handleGetPost = () => {
    const t1: Date = new Date(); // 測試請求開始前的 timestamp
    getPost(1).then((response) => {
      const t2: Date = new Date(); // 測試請求結束後的 timestamp
      console.log(t2.getTime() - t1.getTime() + "ms"); // 請求所需的總時間
      setPost(response.data);
    });
  };

  // 定義 CreatePost prop
  const handleCreatePost = () => {
    const createPostData: PostDataProps = {
      title: "Hello !",
      body: "Hi body.",
    };
    createPost(createPostData).then((response) => {
      setPost(response.data); // 建立資料
    });
  };

  // 定義 UpdatePost prop
  const handleUpdatePost = () => {
    const updatePostData: PostDataProps = {
      title: "Meow Hello !",
      body: "Meow body.",
    };
    updatePost(updatePostData).then((response) => {
      setPost(response.data); // 更新資料
    });
  };

  // 定義 DeletePost prop
  const handleDeletePost = () => {
    deletePost(1).then((response) => {
      alert("Post deleted!");
      setPost(response.data); // 刪除資料
    });
  };

  // 讀取畫面
  // if (!post) return null; // 整個畫面清空
  if (!post)
    return (
      <div className="flex items-center justify-center">
        <p className="flex items-center justify-center"> {"Loading..."} </p>
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
          <ActionButton
            onClick={handleGetPost}
            className="card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-100 text-3xl font-black hover:bg-sky-200 hover:text-indigo-600"
          >
            Get Post
          </ActionButton>
          <ActionButton
            onClick={handleCreatePost}
            className="card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-200 text-3xl font-black hover:bg-sky-200 hover:text-indigo-600"
          >
            Create Post
          </ActionButton>
          <ActionButton
            onClick={handleUpdatePost}
            className="card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-300 text-3xl font-black hover:bg-green-300 hover:text-indigo-500"
          >
            Update Post
          </ActionButton>
          <ActionButton
            onClick={handleDeletePost}
            className="card-btn border-black-600 col-span-6 border-2 border-dashed bg-gray-400 text-3xl font-black hover:bg-yellow-400 hover:text-indigo-600"
          >
            Delete Post
          </ActionButton>
        </section>
        <section className="mx-auto max-w-3xl p-5 text-left">
          <p className="mt-4 text-2xl font-black">{post.title}</p>
          <p className="mt-4 text-2xl ">{post.body}</p>
        </section>
      </main>
    </div>
  );
}
