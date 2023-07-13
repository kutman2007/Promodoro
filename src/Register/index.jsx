import React, { useState } from 'react';
import './stil.css'
const RegistrationForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const Email = (e) => {
    setEmail(e.target.value);
  };

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const Sumpit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Неверный формат email');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Пароль должен содержать не менее 6 символов');
      return;
    }

    // Ваш код для обработки отправки формы регистрации
    // ...

    onLogin(); // Выполнение входа пользователя
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  return (
    <div>
    <form onSubmit={Sumpit} className='login-box'>
      <h2>Login</h2>
      <div className='user-box'>
        <input type="text" value={email} onChange={Email} />
        <label className='email'>Email:</label>
      </div>
      <div className='user-box'>
        <input type="password" value={password} onChange={Password} />
        <label>Password:</label>
      </div>
      {error && <div className="error">{error}</div>}
      <button className='btn1'>Register</button>
    </form>
    </div>
  );
};

export default RegistrationForm;
