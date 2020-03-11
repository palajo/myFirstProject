import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import Slider from '../components/Slider.js';
import Brands from '../components/Brands.js';
import IconGraphic from '../components/IconGraphic.js';
import News from '../components/News.js';
import Contacts from '../components/Contacts.js';
import Description from '../components/Description.js';

function Mainpage() {
	return(
		<body className="AppBody">
			<Slider />
			<Brands />
			<IconGraphic />
			<News />
			<Contacts />
			<Description />
		</body>
	);
}

export default Mainpage;
