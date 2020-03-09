import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import './App.css';


/* images */
import logo from './img/logo.svg';
import polygonwhite from './img/polygon-white.svg';

function App() {
  return (
      <div className="App">
        <header className="AppHeader">

			<Container fluid className="">
				<Row className="justify-content-between TopNavigation">
					<Col>
						<Row>
							<div className="TopNavigation-Menu">
								<Nav>
									<Nav.Link href="#">About us</Nav.Link>
									<Nav.Link href="#">Our office</Nav.Link>
									<Nav.Link href="#">Delivery</Nav.Link>
									<Nav.Link href="#">Payment</Nav.Link>
									<Nav.Link href="#">For clients</Nav.Link>
									<Nav.Link href="#">For business</Nav.Link>
									<Nav.Link href="#">Contacts</Nav.Link>
								</Nav>
							</div>
						</Row>
					</Col>
					<Col>
						<Row className="justify-content-end">
							<div className="TopNavigation-ContactPhone">
								<p>+38 (000) 000 00 00</p>
							</div>
							<div className="TopNavigation-ExchangeRate">
								<p>1 USD = 24,95 UAH ; 1 EUR = 1,10 USD</p>
							</div>
						</Row>
					</Col>
				</Row>

				<Row className="justify-content-between MainNavigation">
					<Col>
						<Row className="justify-content-start">
							<div className="MainNavigation-Menu align-self-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50">
									<path d="M 15.56619262695313 1 L 1.166191101074219 25 L 15.56619262695313 49 L 44.43381118774414 49 L 58.83381271362305 25 L 44.43381118774414 1 L 15.56619262695313 1 M 15.00000381469727 0 L 45 0 L 60 25 L 45 50 L 15.00000381469727 50 L 3.814697265625e-06 25 L 15.00000381469727 0 Z" stroke="none" fill="#962932"/>
									<g>
										<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">icon</text>
									</g>
								</svg>
							</div>
							<div className="MainNavigation-Logo ml-4">
								<img src={logo} alt="logo" height="50" />
							</div>
						</Row>
					</Col>

					<Col>
						<Row className="justify-content-end">
							<div className="MainNavigation-Search align-self-center pr-2">Search</div>
							<div className="MainNavigation-Profile pl-2 pr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50">
									<path d="M 15.56619262695313 1 L 1.166191101074219 25 L 15.56619262695313 49 L 44.43381118774414 49 L 58.83381271362305 25 L 44.43381118774414 1 L 15.56619262695313 1 M 15.00000381469727 0 L 45 0 L 60 25 L 45 50 L 15.00000381469727 50 L 3.814697265625e-06 25 L 15.00000381469727 0 Z" stroke="none" fill="#962932"/>
									<g>
										<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">icon</text>
									</g>
								</svg>
							</div>
							<div className="MainNavigation-Cart pl-2 pr-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50">
									<path d="M 15.56619262695313 1 L 1.166191101074219 25 L 15.56619262695313 49 L 44.43381118774414 49 L 58.83381271362305 25 L 44.43381118774414 1 L 15.56619262695313 1 M 15.00000381469727 0 L 45 0 L 60 25 L 45 50 L 15.00000381469727 50 L 3.814697265625e-06 25 L 15.00000381469727 0 Z" stroke="none" fill="#962932"/>
									<g>
										<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">icon</text>
									</g>
								</svg>
							</div>
							<div className="MainNavigation-LanguageSwitcher align-self-center pl-2">Lang</div>
						</Row>
					</Col>
				</Row>

			</Container>

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
