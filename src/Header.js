
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import './App.css';

/* images */
import logo from './img/logo.svg';
import mainmenu from './img/main-menu.svg';
import search from './img/search.svg';
import profile from './img/profile.svg';
import cart from './img/cart.svg';

function Header() {
	return(
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
							<div className="TopNavigation-ContactPhone margin-right-40">
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
							<div className="MainNavigation-Menu align-self-center margin-right-20">
								<img src={mainmenu} />
							</div>
							<div className="MainNavigation-Logo">
								<img src={logo} alt="logo" height="50" />
							</div>
						</Row>
					</Col>

					<Col>
						<Row className="justify-content-end">
							<div className="MainNavigation-Search align-self-center margin-right-30">
								<Form.Row>
									<Form.Group as={Col}>
										<InputGroup>
											<Form.Control className="search-input align-self-center"
											type="text"
											placeholder="Search here.."
											/>
											<InputGroup.Prepend className="search-input-button">
												<img src={search} />
											</InputGroup.Prepend>
										</InputGroup>
									</Form.Group>
								</Form.Row>
							</div>
							<div className="MainNavigation-Profile d-flex margin-left-20 margin-right-20">
								<div className="span margin-right-10">
									<img src={profile} />
								</div>
								<div className="span align-self-center">
									<p className="bold-16px">Личный</p>
									<p>кабинет</p>
								</div>
							</div>
							<div className="MainNavigation-Cart d-flex margin-left-20 margin-right-20">
								<div className="span margin-right-10">
									<img src={cart} />
								</div>
								<div className="span align-self-center">
										<p className="bold-16px">Корзина</p>
										<p>покупок</p>
								</div>
							</div>
							<div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20">
								<p className="bold-16px color-red">RU</p>
							</div>
						</Row>
					</Col>
				</Row>
			</Container>
		</header>
	);
}

export default Header;
