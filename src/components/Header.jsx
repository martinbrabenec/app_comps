import React from 'react';
import './Header.css';

function Header({ user }) {
  return (
    <header>
      <h1>Hi {user.name}!</h1>
      <div className="time">08:45</div>
    </header>
  );
}

export default Header;
