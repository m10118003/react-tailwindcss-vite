import NavLink from "./components/NavLink";
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
              {link.label}
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
