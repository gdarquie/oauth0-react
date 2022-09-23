import React from 'react';
import LoginButton from './components/connection/LoginButton';
import LogoutButton from './components/connection/LogoutButton';
import Profile from './components/connection/Profile';

function App() {
  return (
    <div className="container">
      <header>
        <h2>Authentication test</h2>
      </header>
      <div>
        <LoginButton/>
        <LogoutButton/>
        <Profile />
        <p>Please, connect or sign up here.</p>
      </div>
    </div>
  );
}

export default App;
