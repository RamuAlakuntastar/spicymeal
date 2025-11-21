import "./index.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Component } from "react";
import Cookies from "js-cookie";

class Signup extends Component {
  state = {
    inputusersign: "",
    inputemailsign: "",
    inputpasssign: "",
    inputconfirmsign: "",
    errorMsg: "",
  };

  // SUCCESS HANDLER
  successresponse = (data) => {
    Cookies.set("jwt_token", data.token, { expires: 30, path: "/" });
    this.props.navigate("/", { replace: true });
  };

  // FAILURE HANDLER
  failureresponse = (data) => {
    this.setState({ errorMsg: data.message || "Signup failed" });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const { inputusersign, inputemailsign, inputpasssign, inputconfirmsign } =
      this.state;

    const userDetails = {
      username: inputusersign,
      email: inputemailsign,
      password: inputpasssign,
      confirmPassword: inputconfirmsign,
    };

    try {
      const response = await fetch(
        "https://userbackend-3o0u.onrender.com/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userDetails),
        }
      );

      const data = await response.json();

      if (response.ok) {
        this.successresponse(data);
      } else {
        this.failureresponse(data);
      }
    } catch (err) {
      this.setState({ errorMsg: "Unable to connect to server" });
    }
  };

  render() {
    const { errorMsg, inputusersign, inputemailsign, inputpasssign, inputconfirmsign } =
      this.state;

    // Already logged in
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Navigate to="/" replace />;
    }

    return (
      <div className="signContainer">
        <form className="formsigncontainer" onSubmit={this.onSubmit}>
          <img
            src="https://res.cloudinary.com/dune02pvg/image/upload/v1763186951/freepik-hand-drawn-colorful-spicy-meal-food-logo-202511150601551R7l_2_iojszk.png"
            className="logologin"
            alt="logo"
          />

          <div className="inputdivsigncont">
            <label className="usernamelabelsign" htmlFor="signuserlab">
              <FaUser /> USERNAME
            </label>
            <input
              id="signuserlab"
              type="text"
              required
              placeholder="Enter username"
              className="inputusernamesign"
              value={inputusersign}
              onChange={(e) => this.setState({ inputusersign: e.target.value })}
            />

            <label className="usernamelabelsign" htmlFor="signemaillab">
              <MdEmail /> EMAIL
            </label>
            <input
              id="signemaillab"
              type="email"
              required
              placeholder="Enter email"
              className="inputusernamesign"
              value={inputemailsign}
              onChange={(e) =>
                this.setState({ inputemailsign: e.target.value })
              }
            />

            <label className="usernamelabelsign" htmlFor="signpasslab">
              <RiLockPasswordFill /> PASSWORD
            </label>
            <input
              id="signpasslab"
              type="password"
              required
              placeholder="Enter password"
              className="inputusernamesign"
              value={inputpasssign}
              onChange={(e) =>
                this.setState({ inputpasssign: e.target.value })
              }
            />

            <label className="usernamelabelsign" htmlFor="signconpasslab">
              <RiLockPasswordLine /> CONFIRM PASSWORD
            </label>
            <input
              id="signconpasslab"
              type="password"
              required
              placeholder="Enter confirm password"
              className="inputusernamesign"
              value={inputconfirmsign}
              onChange={(e) =>
                this.setState({ inputconfirmsign: e.target.value })
              }
            />
          </div>

          {errorMsg && <p className="errorMsgg">{errorMsg}</p>}

          <button className="buttonlogincont">Signup</button>

          <p>
            Have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    );
  }
}

function SignupWrapper() {
  const navigate = useNavigate();
  return <Signup navigate={navigate} />;
}

export default SignupWrapper;
