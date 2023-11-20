import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import "./App.css";
import "./styles/style.scss";

function App() {
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
      <div className="App flex">
        <div className="flex flex-wrap">
          <a href="https://vitejs.dev" target="_blank" rel="noopener">
            <img src={viteLogo} className="logo mt-3 mx-2" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img src={reactLogo} className="logo mt-3 mx-2 react" alt="React logo" />
          </a>
        </div>
        <div className="align-center flex flex-wrap justify-between">
          <Link
            to="/Home"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Home
          </Link>
          <Link
            to="/QuickStart"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Quick Start React
          </Link>
          <Link
            to="/Components"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Components
          </Link>
          <Link
            to="/MarkupWithJSX"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Markup with JSX
          </Link>
          <Link
            to="/DisplayingData"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Displaying Data
          </Link>
          <Link
            to="/RenderingLists"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Rendering Lists
          </Link>
          <Link
            to="/TicTacToe"
            className="link-effect m-2 cursor-crosshair rounded p-5 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
          >
            Tic-Tac-Toe
          </Link>
        </div>
      </div>
    </>
  );
}

// const App2 = () => {

// }

export default App;
