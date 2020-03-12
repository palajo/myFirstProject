import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import icondiscount from '../img/icon-discount.svg';
import iconcalendar from '../img/icon-calendar.svg';

function Icon(props){
	return(
		<Col className="align-self-start">
			<Row className={props.IconPosition}>
				<div className="IconImage">
					<img src={props.IconImage} className="IconIcon" height="84px" />
				</div>
				<div className="HR align-self-center"></div>
			</Row>
			<Row className={props.IconPosition}>
				<p className="margin-top-15">{props.IconDescription}</p>
			</Row>
		</Col>
	);
}

function IconGraphic() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Why we?!</h2>
			</Row>
			<Row className="IconGraphic">
				<Icon IconPosition="justify-content-start" IconImage={icondiscount} />
				<Icon IconPosition="justify-content-start" IconImage={icondiscount} />
				<Icon IconPosition="justify-content-center text-center" IconImage={iconcalendar} IconDescription="Any delivery just in time!" />
				<Icon IconPosition="justify-content-end" IconImage={icondiscount} />
				<Icon IconPosition="justify-content-end" IconImage={icondiscount} />
			</Row>

		</Container>
    );
}

export default IconGraphic;
