import React from 'react';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation'
import Hotelview from '../hotel-view/Hotelview'
import './App.scss';
function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Navigation />
        <Hotelview />
      </div>
    </div>
  );
}

export default App;
