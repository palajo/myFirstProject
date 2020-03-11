import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import newsimage from '../img/news.jpg';

function News() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Latest news</h2>
			</Row>
			<Row className="NewsBlock">
				<Col>
					<Row>
						<img src={newsimage} width="100%" />
					</Row>
					<Row>
						<p className="NewsHeading">Happy New Year!</p>
					</Row>
				</Col>
				<Col>
					<Row>
						<img src={newsimage} width="100%" />
					</Row>
					<Row>
						<p className="NewsHeading">Happy New Year!</p>
					</Row>
				</Col>
				<Col>
					<Row>
						<img src={newsimage} width="100%" />
					</Row>
					<Row>
						<p className="NewsHeading">Happy New Year!</p>
					</Row>
				</Col>
				<Col>
					<Row>
						<img src={newsimage} width="100%" />
					</Row>
					<Row>
						<p className="NewsHeading">Happy New Year!</p>
					</Row>
				</Col>
			</Row>
		</Container>
    );
}

export default News;
