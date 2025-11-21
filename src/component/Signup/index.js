import './index.css'
import { Link, Navigate } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Component } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

class Signup extends Component {
  state = {
    inputusersign: "",
    inputemailsign: "",
    inputpasssign: "",
    inputconfirmsign: "",
    errorMsg: ""
  };
  

  // SUCCESS
  successresponse = (data) => {
    Cookies.set("jwt_token", data, { expires: 1000000, path: "/" });
    this.props.navigate("/", { replace: true });  
  };

  failureresponse = (data) => {
    this.setState({ errorMsg: data.message || "Signup failed" });
  };

  onChangeuserSignup = (event) => {
    this.setState({ inputusersign: event.target.value });
  };

  onChangeemailSignup = (event) => {
    this.setState({ inputemailsign: event.target.value });
  };

  onChangepassSignup = (event) => {
    this.setState({ inputpasssign: event.target.value });
  };

  onChangeconfirmpassSignup = (event) => {
    this.setState({ inputconfirmsign: event.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const { inputusersign, inputemailsign, inputpasssign, inputconfirmsign } = this.state;

    const userDetails = {
      username: inputusersign,
      email: inputemailsign,
      password: inputpasssign,
      confirmPassword: inputconfirmsign
    };

    const response = await fetch("https://userbackend-5mlf.onrender.com/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(userDetails)
    });

    const data = await response.json();

    if (response.ok) {
      this.successresponse(data);
    } else {
      this.failureresponse(data);
    }
  };

  render() {
    const { errorMsg, inputconfirmsign, inputemailsign, inputpasssign, inputusersign } = this.state;

    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="signContainer">
        <form className='formsigncontainer' onSubmit={this.onSubmit}>
          
          <img 
            src='https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png' 
            className='logologin' 
            alt='logo'
          />

          <div className='inputdivsigncont'>
            <label className='usernamelabelsign' htmlFor='signuserlab'>
              <FaUser /> USERNAME
            </label>
            <input 
              type="text" 
              required 
              placeholder='enter username' 
              value={inputusersign} 
              onChange={this.onChangeuserSignup} 
              id='signuserlab' 
              className='inputusernamesign'
            />

            <label className='usernamelabelsign' htmlFor='signemaillab'>
              <MdEmail /> EMAIL
            </label>
            <input 
              type="email" 
              required 
              placeholder='enter email' 
              value={inputemailsign} 
              onChange={this.onChangeemailSignup} 
              id='signemaillab' 
              className='inputusernamesign'
            />

            <label className='usernamelabelsign' htmlFor='signpasslab'>
              <RiLockPasswordFill /> PASSWORD
            </label>
            <input 
              type="password" 
              required 
              placeholder='enter password' 
              value={inputpasssign} 
              onChange={this.onChangepassSignup} 
              id='signpasslab' 
              className='inputusernamesign'
            />

            <label className='usernamelabelsign' htmlFor='signconpasslab'>
              <RiLockPasswordLine /> CONFIRM PASSWORD
            </label>
            <input 
              type="password" 
              required 
              placeholder='enter confirm password' 
              value={inputconfirmsign} 
              onChange={this.onChangeconfirmpassSignup} 
              id='signconpasslab' 
              className='inputusernamesign'
            />
          </div>

          {errorMsg && <p className="errorMsgg">{errorMsg}</p>}

          <button className='buttonlogincont'>Signup</button>

          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    );
  }
}



function SignupWrapper(props) {
  const navigate = useNavigate();
  return <Signup {...props} navigate={navigate} />;
}

export default SignupWrapper;
