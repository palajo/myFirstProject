import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import Slider from '../components/Slider.js';
import Brands from '../components/Brands.js';
import IconGraphic from '../components/IconGraphic.js';
import News from '../components/News.js';

import IconContacts from '../img/icon-contacts.svg';

function Mainpage() {
	return(
		<body className="AppBody">
			<Slider />
			<Brands />
			<IconGraphic />
			<News />
			<Container className="margin-bottom-50">
				<Row className="margin-bottom-30 justify-content-center">
					<h2>Contacts</h2>
				</Row>
				<Row className="ContactsBlock">
					<Col>
						<Row>
							<p className="ContactPhone">+38 (000) 000 00 00</p>
						</Row>
						<Row>
							<Col>
								<Row>
									<div className="span">
										<img src={IconContacts} />
									</div>
									<div className="span margin-left-15">
										some text <br />
										over here.
									</div>
								</Row>
								<Row>
									<div className="span">
										icon
									</div>
									<div className="span">
										some text <br />
										over here.
									</div>
								</Row>
								<Row>
									<div className="span">
										icon
									</div>
									<div className="span">
										some text <br />
										over here.
									</div>
								</Row>
							</Col>
							<Col>
							</Col>
						</Row>
					</Col>
					<Col>
						map
					</Col>
				</Row>
			</Container>
		</body>
	);
}

export default Mainpage;
