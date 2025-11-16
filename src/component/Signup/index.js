import './index.css'
import {Link} from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill ,RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";



const Signup = () => {
    return(<div className="signContainer">
            <form className='formsigncontainer'>
              <img src='https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png' className='logologin' alt='logo'/>
              <div className='inputdivsigncont'>
              <label className='usernamelabelsign' htmlFor='signuserlab'><FaUser/> USERNAME</label>
              <input type="text"required placeholder='enter username' id='signuserlab' className='inputusernamesign'/>
              <label className='usernamelabelsign' htmlFor='signemaillab'><MdEmail /> EMAIL</label>
              <input type="email"required placeholder='enter email' id='signemaillab' className='inputusernamesign'/>
               <label className='usernamelabelsign' htmlFor='signpasslab'><RiLockPasswordFill/> PASSWORD</label>
              <input type="password"required placeholder='enter password' id='signpasslab' className='inputusernamesign'/>
               <label className='usernamelabelsign' htmlFor='signconpasslab'><RiLockPasswordLine /> CONFIRM PASSWORD</label>
              <input type="password"required placeholder='enter confirmpassword' id='signconlab' className='inputusernamesign'/>
              </div>
              <button className='buttonlogincont'>Signup</button>
              <p>Have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>)
}






export default Signup