import React from 'react';
import './App.css';

/* images */
import logo from './img/logo.svg';
import polygonwhite from './img/polygon-white.svg';

function App() {
  return (
      <div className="App">
        <header className="AppHeader">


            <div className="TopNavigation">
                <div className="TopNavigation-LeftBlock">
                    <div className="TopNavigation-Menu">
                        <ul>
                            <li>About us</li>
                            <li>Our office</li>
                            <li>Delivery</li>
                            <li>Payment</li>
                            <li>For clients</li>
                            <li>For business</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
                <div className="TopNavigation-RightBlock">
                    <div className="TopNavigation-ContactPhone">
                        <p>+38 (000) 000 00 00</p>
                    </div>
                    <div className="TopNavigation-ExchangeRate">
                        <p>1 USD = 24,95 UAH ; 1 EUR = 1,10 USD</p>
                    </div>
                </div>
            </div>


            <div className="MainNavigation">
                <div className="MainNavigation-LeftBlock">
                    <div className="MainNavigation-BurgerMenu">
                        <img src={polygonwhite} alt={"polygon"} className="MainNavigation-BurgerBackground"/>
                        <div class="MainNavigation-BurgerButton">
                            button
                        </div>
                    </div>
                    <div className="MainNavigation-Logo">
                        <img src={logo} alt={"logo"} className="MainNavigation-Logo"/>
                    </div>
                </div>
                <div className="MainNavigation-RightBlock">
                    <div className="MainNavigation-Search">
                        Search
                    </div>
                    <div className="MainNavigation-Profile">
                        Profile
                    </div>
                    <div className="MainNavigation-Cart">
                        Cart
                    </div>
                    <div className="MainNavigation-LanguageSwitcher">
                        EN
                    </div>
                </div>
            </div>

        </header>
      </div>
  );
}

export default App;
/*
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Hello, iot!
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>

*/
