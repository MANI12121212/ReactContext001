import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import {ThemeContext} from "../App"
const themes = {
    light: {
      color: "#000000",
    },
    dark: {
      color: "aqua",
      background: "#222222"
    }
  };

const Comp = () => {
    const theme = useContext(ThemeContext);
  return (
    <div style={theme?themes.light:themes.dark}>        
        <div><h4 style={theme?{color:'black'}:{color:"aqua"}} href="#">Geekster</h4></div>
        <Link to="/home" ><div style={theme?{color:'black'}:{color:"aqua"}}>home</div></Link>
        <Link to="/contact" ><div style={theme?{color:'black'}:{color:"aqua"}}>contact</div></Link>
        <Link to="/service"><div style={theme?{color:'black'}:{color:"aqua"}}>service</div></Link>
    </div>
  )
}

export default Comp