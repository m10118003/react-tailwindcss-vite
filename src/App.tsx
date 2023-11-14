import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";



import Home from "./routes/Home";

// import "./App.css";
import "./styles/style.scss";

function App() {
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
      <div>
        <div className="align-center inline-flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noopener">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <Link to="/Home" className="link-effect m-5 py-5 hover:bg-sky-200 hover:text-indigo-800 rounded hover:rounded p-1 cursor-crosshair">
            Home
          </Link>
          <Link to="/QuickStart" className="link-effect m-5 py-5 hover:bg-sky-200 hover:text-indigo-800 rounded hover:rounded p-1 cursor-crosshair">
            Quick Start React
          </Link>
          <Link
            to="/Components"
            className="link-effect m-5 py-5 hover:bg-sky-200 hover:text-indigo-800 rounded hover:rounded p-1 cursor-crosshair"
          >
            Components
          </Link>
          <Link
            to="/MarkupWithJSX"
            className="link-effect m-5 py-5 hover:bg-sky-200 hover:text-indigo-800 rounded hover:rounded p-1 cursor-crosshair"
          >
            Markup with JSX
          </Link>
          <Link
            to="/DisplayingData"
            className="link-effect m-5 py-5 hover:bg-sky-200 hover:text-indigo-800 rounded hover:rounded p-1 cursor-crosshair"
          >
            Displaying Data
          </Link>
        </div>
      </div>
    </>
  );
}

// const App2 = () => {

// }

export default App;