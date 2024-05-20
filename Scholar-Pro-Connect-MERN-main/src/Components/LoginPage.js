import * as React from "react";
import "../styles/LoginPage.css";
function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-branding">
        <div className="login-title">
          <span className="brand-color">S</span>
          <span className="brand-color">cholar - Pro</span>
          <span> </span>
          <span className="brand-color">C</span>
          <span className="brand-color">onnect </span>
          <span className="brand-color">L</span>
          <span className="brand-color">LP</span>
        </div>
      </div>
      <div className="login-form">
        <h1 className="login-heading">Login</h1>
        <div className="username-field">
          <label htmlFor="username">Username / E-mail</label>
          <input type="text" id="username" className="username-input" />
        </div>
        <div className="password-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password-input" />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password ?</a>
        </div>
        <button className="sign-in-button">Sign In</button>
        <div className="register-link">
          Don't have an account? <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;