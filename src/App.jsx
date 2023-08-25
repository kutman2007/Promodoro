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
         <Pomodoro/>
        </div>
      ) : (
        <RegistrationForm onLogin={handleLogin} />
      )}
          {/* <Pomodoro/> */}
    </div>
  );
};

export default App;
