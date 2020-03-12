import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import sliderimage from '../img/slider-image.png';
import brand from '../img/brand.svg';

function Brand(props) {
  return (
	  <Col className="BrandBackground">
		  <Row className="justify-content-center ">
				  <img src={props.BrandLogo} width="24" />
				  <div className="margin-left-10 align-self-center">{props.BrandTitle}</div>
		  </Row>
	  </Col>
  );
}

function Brands() {
	return(
        <Container className="Brands">
            <Row>
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
            </Row>
            <Row>
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
				<Brand BrandLogo={brand} BrandTitle="Volkswagen" />
            </Row>
        </Container>
    );
}

export default Brands;
