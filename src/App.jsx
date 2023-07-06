import React, { useState } from 'react';
import RegistrationForm from './Register';
import Pomodoro from './promodor';
  import './App.css'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Флаг для отслеживания состояния входа пользователя

  const handleLogin = () => {
    // Ваш код для выполнения входа пользователя
    setIsLoggedIn(true);
  };


  return (
    <div>
      <Pomodoro />
      {/* {isLoggedIn ? (
        // Если пользователь вошел, показываем компонент Pomodoro
        <div>
          <Pomodoro />
        </div>
      ) : (
        // Если пользователь не вошел, показываем компонент RegistrationForm
        <RegistrationForm onLogin={handleLogin} />
      )} */}
    </div>
  );
};

export default App;
