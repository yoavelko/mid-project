import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersData from '../Data/users.json';
import SignUp from './SignUp';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Find user with matching username and password
    const user = usersData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // User found, navigate to the homepage
      navigate('/UserArea');
      setError('');
    } else if (usersData.admin.username === username && usersData.admin.password === password) {
      // Admin login
      navigate('/AdminArea');
      setError('');
    } else {
      // User not found or invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div className='personal-area'>
      <div className='login-container'>
        <h2>Login</h2>
        <input
          className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div className='signup-container'>
        <SignUp />
      </div>
    </div>
  );
};

export default Login;

