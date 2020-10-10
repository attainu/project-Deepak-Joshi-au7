import React, { useState } from "react";
import "./login.css";
import Logo from "../../images/logo/signIn.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={Logo} alt="Amazon Login Logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
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
          <div className="termsAndCondition">
            <p>Signing-in Policy Goes Here</p>
          </div>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <b />
        <h1 className="or">OR</h1>
        <b />
        <Link to="/Signup">
          <button className="login__registerButton">
            Create your Amazon Account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
