
import reactLogo from "./assets/react.svg";
import "./App.css";
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Usuarios from "./Pages/Usuarios";
import Login from "./Pages/Login";



function App() {
  
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
  );
}

export default App;
