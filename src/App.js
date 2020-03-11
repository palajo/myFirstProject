import React from 'react';
import Header from './components/Header.js';
import Mainpage from './pages/Mainpage.js';
import Footer from './components/Footer.js';

import './App.css';

function App() {
  return (
      <div className="App">
	  	<Header />
        <Mainpage />
        <Footer />
      </div>
  );
}

export default App;
