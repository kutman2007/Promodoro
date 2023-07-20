import React, { useState } from 'react';
import RegistrationForm from './Register';
import Pomodoro from './promodor';
  import './App.css'
const App = () => {
  const [loggin, setloggin] = useState(false);

  const handleLogin = () => {
    setloggin(true);
  };
  return (
    <div> 
      {loggin ? (
        <div>
         
        </div>
      ) : (
        <RegistrationForm onLogin={handleLogin} />
      )}
       
    </div>
  );
};

export default App;
