import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import './App.css';

import slide from './img/slide.jpg';
import brand from './img/brand.svg';

import sliderimage from './img/slider-image.png';

function Mainpage() {
	return(
		<body className="AppBody">
			<Container fluid className="Slider">
				<Container className="SliderBackground">
					<Row >
						<Col lg={4} className="align-self-center">
							<Row>
								<h1 className="SliderHeading">
									Searching for <br />
									details?
								</h1>
								<hr />
								<p className="SliderText">USE THE SEARCH BOX ON OUR WEBSITE</p>
								<button className="button">Find details</button>
							</Row>
						</Col>
						<Col lg={8}>
							<Row className="justify-content-end">
								<img src={sliderimage} width="100%" />
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container className="Brands">
				<Row>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
				</Row>
				<Row id="reverse">
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
				</Row>
				<Row id="reverse">
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
					<Col className="BrandBackground">
						<Row className="justify-content-center ">
								<img src={brand} width="24" />
								<div className="margin-left-10 align-self-center">Volkswagen</div>
						</Row>
					</Col>
				</Row>
			</Container>
		</body>
	);
}

export default Mainpage;
