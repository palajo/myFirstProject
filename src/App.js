import React from 'react';
import Header from './components/Header.js';
import Mainpage from './pages/Mainpage.js';

import './App.css';

function App() {
  return (
      <div className="App">
	  	<Header />
        <Mainpage />
      </div>
  );
}

export default App;
