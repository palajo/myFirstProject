import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import IconContacts from '../img/icon-contacts.svg';
import Map from '../img/google-map.png';

function Contact(props) {
  return (
	  <Row>
		  <div className="span">
			  <img src={props.IconContact} />
		  </div>
		  <div className="span margin-left-15 align-self-center">
			  <p className="gray-12px">{props.ContactHeading}</p>
			  <p>{props.ContactInfo}</p>
		  </div>
	  </Row>
  );
}

function Contacts() {
	return(
		<Container>
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
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />

						</Col>
						<Col>
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
							<Contact IconContact={IconContacts} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
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
