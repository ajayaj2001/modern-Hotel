import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation'
import './App.scss';
function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="sidebar">
          <Navigation />
        </div>
        <main className="hotel-view">
          hotel view
       </main>
      </div>
    </div>
  );
}

export default App;
