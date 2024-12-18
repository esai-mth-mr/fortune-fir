import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./Router";
import { Toaster } from 'react-hot-toast';

import './App.css'
import SignUp from "./pages/SingUp";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Continue from "./pages/GetReady";
import Main from "./pages/Main";
import Required from "./pages/verification/required";
import Succesful from "./pages/verification/succesful";
import Failed from "./pages/verification/failed";
import GetReady from "./pages/GetReady";

function App() {

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Routes>
          
            <Route path="/" element={<Home/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="getready" element={<GetReady/>}/>
            <Route path="main" element={<Main/>}/>

            <Route path="required" element={<Required/>}/>
            <Route path="successful" element={<Succesful/>}/>
            <Route path="failed" element={<Failed/>}/>
          </Routes>
          {/* <Router /> */}
          {/* <Toaster toastOptions={{
            className: '',
            duration: 3000,
            style: {
              borderRadius: '10px',
              background: '#44475d',
              color: '#fff',
              animationTimeline: '3000'
            },
          }} 
          /> */}
        </BrowserRouter>
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
