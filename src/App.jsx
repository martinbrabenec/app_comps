import React, { useState } from 'react';
import Header from './components/Header';
import HealthTracker from './components/HealthTracker';
import QuickAccess from './components/QuickAccess';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [user, setUser] = useState({ name: 'Martin' });

  return (
    <div className="app">
      <Header user={user} />
      <main>
        <HealthTracker />
        <QuickAccess />
      </main>
      <Footer />
    </div>
  );
}

export default App;
