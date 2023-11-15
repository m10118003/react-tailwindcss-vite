import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
// import * as ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.tsx'
import Home from './routes/Home';
import QuickStart from './routes/QuickStart';
import Components from './routes/Components';
import MarkupWithJSX from './routes/MarkupWithJSX';
import DisplayingData from './routes/DisplayingData';
import RenderingLists from './routes/RenderingLists';
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
  {
    path: "/Components",
    element: <Components />,
  },
  {
    path: "/MarkupWithJSX",
    element: <MarkupWithJSX />,
  },
  {
    path: "/DisplayingData",
    element: <DisplayingData />,
  },
  {
    path: "/RenderingLists",
    element: <RenderingLists />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
