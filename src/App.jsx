import React, { useState } from 'react';
import RegistrationForm from './Register';
import Pomodoro from './promodor';
  import './App.css'
const App = () => {
  const [loggin, setloggin] = useState(false); // Флаг для отслеживания состояния входа пользователя

  const handleLogin = () => {
    // Ваш код для выполнения входа пользователя
    setloggin(true);
  };


  return (
    <div>
      
      {loggin ? (
        // Если пользователь вошел, показываем компонент Pomodoro
        <div>
          <Pomodoro />
        </div>
      ) : (
        // Если пользователь не вошел, показываем компонент RegistrationForm
        <RegistrationForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
