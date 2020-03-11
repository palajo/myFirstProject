import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import icondiscount from '../img/icon-discount.svg';
import iconcalendar from '../img/icon-calendar.svg';

function IconGraphic() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Why we?!</h2>
			</Row>
			<Row className="IconGraphic">
				<Col >
					<Row className="justify-content-start">
						<img src={icondiscount} width="100px" />
					</Row>
				</Col>
				<Col>
					<Row className="justify-content-start">
						<img src={icondiscount} width="100px" />
					</Row>
				</Col>
				<Col>
					<Row className="text-center justify-content-center">
						<img src={iconcalendar} width="100px" />

					</Row>
					<Row className="text-center justify-content-center">
						<p>
							Any delivery <br />
							"just in time!"
						</p>
					</Row>
				</Col>
				<Col>
					<Row className="justify-content-end">
						<img src={icondiscount} width="100px" />
					</Row>
				</Col>
				<Col>
					<Row className="justify-content-end">
						<img src={icondiscount} width="100px" />
					</Row>
				</Col>
			</Row>
		</Container>
    );
}

export default IconGraphic;
