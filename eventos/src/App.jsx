import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ''


function Login(){
  return(
    <div className='Cuerpo'>
      <div className='ContenedorP'>
          <div className='ContenedorS'>
            <div>

              <h1>Login</h1>
              
              <label>UserName</label><br></br>
              <input type="text" placeholder='Usuario'></input><br>
              </br>
              <label>password</label><br></br>
              <input type="Password" placeholder='Contraseña'></input><br>
              </br>
              <button>Login</button>
              </div>
          </div>
      </div>
    </div>
  )
}
export default Login


