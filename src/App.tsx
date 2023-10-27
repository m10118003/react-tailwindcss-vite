import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from './routes/Home';

// import "./App.css";
import "./styles/style.scss";

function App() {

  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <>
      <div>
        <div className="inline-flex justify-center align-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={ viteLogo } className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={ reactLogo } className="logo react" alt="React logo" />
          </a>
          <Link to="/Home" className="m-5 py-5">Home</Link>
          <Link to="/QuickStart" className="m-5 py-5">Quick Start React</Link>
          <Link to="/Components" className="m-5 py-5">Components</Link>          
        </div>        
      </div>
    </>
  );
}

// const App2 = () => {

// } 

export default App;
