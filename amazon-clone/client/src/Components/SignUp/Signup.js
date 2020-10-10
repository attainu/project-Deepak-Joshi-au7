import React, { useState } from "react";
import "./signup.css";
import loginLogo from "../../images/logo/signIn.png";
import { Link } from "react-router-dom";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={loginLogo} alt="Amazon Login Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-Up</h1>
        <form>
          <h5>firstName</h5>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <h5>lastName</h5>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="termsAndCondition">
            <p>Registering Policy Goes Here</p>
          </div>
          <button
            type="submit"
            onClick={register}
            className="login__registerButton"
          >
            Register
          </button>
          <h1 className="or"> OR </h1>
          <Link to="/login">
            <button className="login__signInButton">Sign in </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
