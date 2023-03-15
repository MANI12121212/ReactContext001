import './App.css';
import Comp from './components/Comp';
// import Toggle from './components/Toggle'
import { useState,createContext } from "react";
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Home from  './components/Home'


export const ThemeContext=createContext("hello");
function App() {
  const [first, setfirst] = useState(true)
  function hello(){
    setfirst(!first)

  }
  return (
    <div className="App">
    <h1>
      I Have changed to {first?"light":"dark"} Mode
    </h1>
    <div style={first?{color:'black'}:{color:"aqua", backgroundColor:"#222222"}}>

    <ThemeContext.Provider value={first}>
      <Comp />
    <button onClick={hello}>Changed the mode to {first?"dark":"light"}</button>
        <Routes>
          <Route  path='/home' element={<Home hello={hello}/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<About/>}/>
        </Routes>
    </ThemeContext.Provider>
    </div>
    </div>
  );
}

export default App;