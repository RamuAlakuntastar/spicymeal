import './index.css'
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from 'react-router-dom'


const Login = () => {
    return (<div className="loginContainer">
        <form className='formlogincontainer'>
          <img src='https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png' className='logologin' alt='logo'/>
          <div className='inputcontainerlogin'>
          <label className='usernamelabellogin' htmlFor='username'><FaUser /> USERNAME</label>
          <input type='text' required className='inputusernamelogin' placeholder='Enter Username' id='username'/>
          <label className='passwordlabellogin' htmlFor='username'><RiLockPasswordFill /> PASSWORD</label>
          <input type='password' required className='inputpasswordlogin' placeholder='Enter password'/>
          </div>
          <button className='buttonlogincont'>Login</button>
          <p>Don't have an account? <Link to="/signup" className='spanlogin'>Sign up</Link></p>
        </form>
    </div>)
}





export default  Login