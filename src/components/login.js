import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;
    if (password === correctPassword) {
      navigate('/wish');
    } else {
      alert('OOPS! Wrong Password.');
    }
  };

  return (
    <div className="login-page">
      {/* Netflix Logo */}
        <div className="netflix-logo">BRAINROT</div>

        {/* Sign-In Card */}
        <div className="login-card">
            <h3 className="login-title">Enter Password , To see your Gift</h3>
            
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    />
                </div>
                <button type="submit" className="btn-login">Sign In</button>
            </form>

            <div className="hints">
              <details>
                <summary>Hint 1</summary>
                <div className="hint-body">what is today?</div>
              </details>
              <details>
                <summary>Hint 2</summary>
                <div className="hint-body">Date.</div>
              </details>
              <details>
                <summary>Hint 3</summary>
                <div className="hint-body">Ohhoo , use few alphabets</div>
              </details>
            </div>
        </div>
    </div>
  );
}

export default Login;
