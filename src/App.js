

import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'

import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'




const App = () => {
  return(<BrowserRouter>
       <Routes>
        <Route path='/'  Component={Home} />
        <Route path="/login" Component={Login}/>
        <Route path='/signup' Component={Signup}/>
       </Routes>
   </BrowserRouter>)
}

export default App;
