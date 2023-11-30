import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavLink from "./components/NavLink";

// import "./App.css";
import "./styles/style.scss";

const links = [
  {
    to: "/Home",
    label: "Home",
  },
  {
    to: "/QuickStart",
    label: "Quick Start",
  },
  {
    to: "/Components",
    label: "Components",
  },
  {
    to: "/MarkupWithJSX",
    label: "Markup With JSX",
  },
  {
    to: "/DisplayingData",
    label: "Displaying Data",
  },
  {
    to: "/RenderingLists",
    label: "Rendering Lists",
  },
  {
    to: "/TicTacToe",
    label: "Tic-Tac-Toe",
  },
  {
    to: "/ThinkingReact",
    label: "Thinking React",
  },
];

export default function App() {
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
      <div className="App flex">
        <div className="flex flex-wrap">
          <a href="https://vitejs.dev" target="_blank" rel="noopener">
            <img src={viteLogo} className="logo mx-2 mt-3" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img
              src={reactLogo}
              className="logo react mx-2 mt-3"
              alt="React logo"
            />
          </a>
        </div>
        <div className="align-center flex flex-wrap justify-between">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

// const App2 = () => {

// }
