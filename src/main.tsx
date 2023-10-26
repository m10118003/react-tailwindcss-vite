import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
// import * as ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Home from './routes/Home';
import QuickStart from './routes/QuickStart';
import './index.css'


const router = createBrowserRouter( [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/QuickStart",
    element: <QuickStart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
