import NavLink from "./components/NavLink";
import { useLocation } from 'react-router-dom'; // 確保是從 react-router-dom 匯入
import { useState, useEffect } from 'react';
import Clock from "@/components/Clock";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
// import "./App.css";
import "./styles/style.scss";

const links = [
  { id: "1", to: "/", label: "Home" },
  { id: "2", to: "/QuickStart", label: "Quick Start" },
  { id: "3", to: "/Components", label: "Components" },
  { id: "4", to: "/MarkupWithJSX", label: "Markup With JSX" },
  { id: "5", to: "/DisplayingData", label: "Displaying Data" },
  { id: "6", to: "/RenderingLists", label: "Rendering Lists" },
  { id: "7", to: "/TicTacToe", label: "Tic-Tac-Toe" },
  { id: "8", to: "/ThinkingReact", label: "Thinking React" },
  { id: "9", to: "/DescribeUI", label: "Describe UI" },
  { id: "10", to: "/AddInteractivity", label: "AddInteractivity" },
  { id: "11", to: "/AxiosDemoPhase2", label: "Axios Demo" },
];

export default function App() {
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";

  const location = useLocation(); // 在組件頂部 Call useLocation

  const navLinkStyle = () => {
    return "link-effect m-2 cursor-crosshair rounded p-4 font-black hover:rounded hover:bg-sky-200 hover:text-[#646cff]";
  }

  const isActive = (path: string) => {
    return location.pathname === path ? "underline underline-offset-8 decoration-dashed decoration-2 transition duration-500 ease-in-out text-[#646cff]" : "";
  }

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 500);

    return () => {
      clearInterval(timerId);
    };
  }, []);
  const hours = time.getHours();
  const dayAndNight = hours >= 0 && hours <= 6 ? 'bg-gray-100 rounded' : 'day';

  return (
    <>
      <div className="App flex">
        <nav className="flex flex-wrap items-center justify-start">
          {links.map((link) => (
            <NavLink key={link.id} to={link.to}>
              <div className={`${navLinkStyle()} ${isActive(link.to)}`} >{link.label}</div>
            </NavLink>
          ))}
        </nav>
      </div>
      <Clock time={time} className={`${dayAndNight} fixed left-0 bottom-0`} />
    </>
  );
}

// const App2 = () => {

// }
