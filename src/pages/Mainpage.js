import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import Slider from '../components/Slider.js';
import Brands from '../components/Brands.js';

import icondiscount from '../img/icon-discount.svg';

function Mainpage() {
	return(
		<body className="AppBody">
			<Slider />
			<Brands />
			<Container className="IconGraphic">
				<Row className="margin-bottom-30 justify-content-center">
					<h2>Why we?!</h2>
				</Row>
				<Row className="text-center IconDescription">
					<Col>
						<img src={icondiscount} width="100px" />
					</Col>
					<Col>
						<img src={icondiscount} width="100px" />
					</Col>
					<Col>
						<img src={icondiscount} width="100px" />
						<p>
							Any delivery <br />
							"just in time!"
						</p>
					</Col>
					<Col>
						<img src={icondiscount} width="100px" />
					</Col>
					<Col>
						<img src={icondiscount} width="100px" />
					</Col>
				</Row>
			</Container>

		</body>
	);
}

export default Mainpage;
