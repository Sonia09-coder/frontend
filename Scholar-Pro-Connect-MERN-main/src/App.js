// App.js
import React, { useState } from 'react';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {
  const [showLogin, setShowLogin] = useState(true); // Initial state shows login

  const handleShowSignup = () => {
    setShowLogin(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  return (
    <div>
    {showLogin ? <LoginPage onShowSignup={handleShowSignup} /> : <SignupPage onShowLogin={handleShowLogin} />}
      {/* Conditionally render Login or Signup based on state */}
    </div>
  );
}

export default App;
