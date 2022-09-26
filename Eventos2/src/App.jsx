import { useState, Fragment } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import logo from "./img/logo.png";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";





function App() {

  
  
  //CODIGO HTML RETORNADO//
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/usuarios' element={<Usuarios />}/>
        
      </Routes>

      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
      </BrowserRouter>
  </div>

  )
  
}

export default App;
