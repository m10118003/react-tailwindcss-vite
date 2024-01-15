import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
// import * as ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.tsx'
import Home from "./pages/Home";
import QuickStart from "./pages/QuickStart";
import Components from "./pages/Components";
import MarkupWithJSX from "./pages/MarkupWithJSX";
import DisplayingData from "./pages/DisplayingData";
import RenderingLists from "./pages/RenderingLists";
import TicTacToe from "./pages/TicTacToe";
import ThinkingReact from "./pages/ThinkingReact";
import DescribeUI from "./pages/DescribeUI";
import AxiosDemoPhase2 from "./pages/AxiosDemoPhase2";
import "./index.css";

const router = createBrowserRouter([
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
  {
    path: "/TicTacToe",
    element: <TicTacToe />,
  },
  {
    path: "/ThinkingReact",
    element: <ThinkingReact />,
  },
  {
    path: "/DescribeUI",
    element: <DescribeUI />,
  },
  {
    path: "/AxiosDemoPhase2",
    element: <AxiosDemoPhase2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
