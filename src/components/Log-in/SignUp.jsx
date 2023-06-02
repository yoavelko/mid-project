import React, { useState } from 'react';

const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert('Password should be at least 8 characters long');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password should contain at least one uppercase letter and one number'
      );
      return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('password', password);
    localStorage.setItem('username', username);

    setFirstName('');
    setLastName('');
    setPassword('');
    setUsername('');

    alert('Signup successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Sign-Up</h2>
      <label className='first-name'>
        First Name:
        <input className='input'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label className='last-name'>
        Last Name:
        <input className='input'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label className='password'>
        Password:
        <input className='input'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label className='username'>
        Username:
        <input className='input'
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
