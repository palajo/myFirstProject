import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import IconClock from '../img/icon-clock.svg';
import IconLocation from '../img/icon-location.svg';
import IconMessage from '../img/icon-message.svg';

import Map from '../img/google-map.png';

function Contact(props) {
  return (
	  <Row>
		  <div className="span">
			  <img width="64px" src={props.IconContact} />
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
							<Contact IconContact={IconMessage} ContactHeading="Ask a question:" ContactInfo="info@s-car.com" />
							<Contact IconContact={IconMessage} ContactHeading="For partners:" ContactInfo="partners@s-car.com" />
							<Contact IconContact={IconLocation} ContactHeading="Address:" ContactInfo="28 Park Road London WC36 7MB" />

						</Col>
						<Col>
							<Contact IconContact={IconClock} ContactHeading="Warehouse:" ContactInfo="Mn. - Fr.: 9:00 - 18:00" />
							<Contact IconContact={IconClock} ContactHeading="Working hours:" ContactInfo="Mn. - Fr.: 9:00 - 18:00" />
							<Contact IconContact={IconMessage} ContactHeading="Skype:" ContactInfo="@scarmanager" />
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
