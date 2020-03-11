import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import sliderimage from '../img/slider-image.png';

function Slider() {
	return(
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
    );
}

export default Slider;
