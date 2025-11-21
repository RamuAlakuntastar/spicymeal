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

  const onSubmitLogin = async (event) => {
    event.preventDefault();

    const userDetails = {
      username: inputname,
      password: inputpassword,
    };

    const url = "https://userbackend-3o0u.onrender.com/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("jwt_token", data.token, { expires: 30 });
        navigate("/", { replace: true });
      } else {
        setErrorMsg(data.message || "Invalid Login Details");
      }
    } catch (error) {
      setErrorMsg("Unable to connect to server");
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
            onChange={(e) => setInputname(e.target.value)}
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
            onChange={(e) => setInputpassword(e.target.value)}
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
