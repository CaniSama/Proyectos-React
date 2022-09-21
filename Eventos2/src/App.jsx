import { useState } from "react";
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
import logo from "./img/logo.png";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";

function App() {
  const alertaNoImplementado=()=>{
    alert("funcion no implementada")
  }
  return (
    <Box
      border={1}
      sx={{
        
        boxShadow: 4,
        borderRadius: "16px",
        bgcolor: "#E0DCDF",
        height: "77%",
        width: "500px",
  
      }}
    >
      <img src={logo} alt="logo" className="logo" />
      <Grid container>
        <Grid item md={12} m={2}>
          <FormControl variant="outlined">
            <TextField
              htmlFor="User"
              label=""
              placeholder="Usuario"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle></AccountCircle>
                  </InputAdornment>
                ),
              }}
            >
              Usuario
            </TextField>
          </FormControl>
        </Grid>
        <Grid item md={12} m={2}>
          <FormControl>
          <TextField
              htmlFor="Pass"
              label=""
              placeholder="Contraeña"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                   <LockIcon></LockIcon>
                  </InputAdornment>
                ),
              }}
            >
              Usuario
            </TextField>
            
         
          </FormControl>
        </Grid>
        <Grid item md={12} m={2}>
          <Button variant="contained" color="primary" onClick={()=>alertaNoImplementado()}>
            {" "}
            iniciar sesion
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
