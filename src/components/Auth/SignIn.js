import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="logo">Speedy</div>
        </header>
        <main className="main">
          <div className="login-form">
            <h2>Login</h2>
            <form>
              <input type="tel" placeholder="Mobile Number" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
              <div className="form-footer">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#">Forgot password?</a>
              </div>
            </form>
            <p>Don't have an account? <Link to="/signUp">Sign Up</Link></p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
