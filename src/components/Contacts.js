import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import IconContacts from '../img/icon-contacts.svg';
import Map from '../img/google-map.png';

function Contacts() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Contacts</h2>
			</Row>
			<Row className="ContactsBlock">
				<Col className="">
					<Row>
						<p className="ContactPhone margin-bottom-20">+38 (000) 000 00 00</p>
					</Row>
					<Row className="ContactInfo">
						<Col>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
						</Col>
						<Col>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
							<Row>
								<div className="span">
									<img src={IconContacts} />
								</div>
								<div className="span margin-left-15 align-self-center">
									<p className="gray-12px">Ask a question:</p>
									<p>info@s-car.com.ua</p>
								</div>
							</Row>
						</Col>
					</Row>
				</Col>
				<Col>
					<img src={Map} width="100%" height="300"/>
				</Col>
			</Row>
		</Container>
    );
}

export default Contacts;
