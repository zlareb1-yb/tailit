import React from 'react';
import './App.css';
import ServicesPage from './pages/services/services.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
        <Header />
        <ServicesPage />
      </div>
  );
}

export default App;
