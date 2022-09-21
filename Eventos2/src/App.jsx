import { useState } from "react";
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
import logo from "./img/logo.png";
import { AccountCircle } from "@mui/icons-material";
import LockIcon from "@mui/icons-material/Lock";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const login = async () => {
    try {
      // axios
      // .post("http://localhost:3001/", {
      //   userName: username,
      //   password: password,
      // })  
      // .then((response) => {
      //   if (response.data.message) {
      //     setLoginStatus(response.data.alert);
      //   } else {
      //     setLoginStatus(response.data[0].username);
      //   }
      // });

      const result = await axios.post("http://localhost:3001/login",{
        username,
        password
      })
      console.log(result)

    } catch (error) {
      console.log(error);
    }
    
  };

  const alertaNoImplementado = () => {
    alert("funcion no implementada");
  };

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
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              htmlFor="Pass"
              label=""
              placeholder="Contraeña"
              type="password"
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
          <Button variant="contained" color="primary" onClick={login}>
            iniciar sesion
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
