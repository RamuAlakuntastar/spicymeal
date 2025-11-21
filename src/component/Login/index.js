import { useState } from "react";
import "./index.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [inputname, setInputname] = useState("");
  const [inputpassword, setInputpassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();  

  const onChangeUsername = (event) => {
    setInputname(event.target.value);
  };

  const onChangeUserPassword = (event) => {
    setInputpassword(event.target.value);
  };

  const onSubmitSuccess = (data) => {
    Cookies.set("jwt_token", data.token, { expires: 10000 });

   
    navigate("/", { replace: true });
  };

  const onSubmitFailure = (data) => {
    setErrorMsg(data.message || "Login failed");
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();

    const userDetails = {
      username: inputname,
      password: inputpassword,
    };

    const url = "https://userbackend-5mlf.onrender.com/login";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        onSubmitSuccess(data);
      } else {
        onSubmitFailure(data);
      }
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  };

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="loginContainer">
      <form className="formlogincontainer" onSubmit={onSubmitLogin}>
        <img
          src="https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png"
          className="logologin"
          alt="logo"
        />

        <div className="inputcontainerlogin">
          <label className="usernamelabellogin" htmlFor="username">
            <FaUser /> USERNAME
          </label>
          <input
            type="text"
            id="username"
            required
            className="inputusernamelogin"
            placeholder="Enter Username"
            value={inputname}
            onChange={onChangeUsername}
          />

          <label className="passwordlabellogin" htmlFor="password">
            <RiLockPasswordFill /> PASSWORD
          </label>
          <input
            type="password"
            id="password"
            required
            className="inputpasswordlogin"
            placeholder="Enter password"
            value={inputpassword}
            onChange={onChangeUserPassword}
          />
        </div>

        {errorMsg && <p className="errorMsg">{errorMsg}</p>}

        <button className="buttonlogincont">Login</button>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="spanlogin">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
