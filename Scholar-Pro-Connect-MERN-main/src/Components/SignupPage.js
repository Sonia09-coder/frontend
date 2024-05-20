import * as React from "react";
import "../styles/SignupPage.css";
function SignupPage() {
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
        <h1 className="login-heading">Create Account</h1>
        <div className="username-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="username-input" />
        </div>
        <div className="username-field">
          <label htmlFor="username">E-mail</label>
          <input type="text" id="username" className="username-input" />
        </div>
        <div className="password-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password-input" />
        </div>
        <div className="password-field">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" className="password-input" />
        </div>
        <button className="sign-in-button">Create Account</button>
        <div className="register-link">
          Already have an account? <a href="#">Log in</a>
        </div>
        </div>
      </div>
    
  );
}

export default SignupPage;