import React from 'react';
import Header from '../header/Header';
import './App.scss';
function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      {/* <Header className="header" ></Header> */}
      <div className="content">
        <div className="sidebar">nav</div>
        <main className="hotel-view">
          hotel view
       </main>
      </div>
    </div>
  );
}

export default App;
