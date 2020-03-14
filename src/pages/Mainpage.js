import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Form, InputGroup } from 'react-bootstrap';

import Overlay from '../components/Overlay.js';
import Slider from '../components/Slider.js';
import Brands from '../components/Brands.js';
import IconGraphic from '../components/IconGraphic.js';
import News from '../components/News.js';
import Contacts from '../components/Contacts.js';
import Description from '../components/Description.js';

function Mainpage() {
	return(
		<body className="AppBody">
			<Overlay />
			<Slider />
			<div className="margin-bottom-50"></div>
			<Brands />
			<div className="margin-bottom-50"></div>
			<IconGraphic />
			<div className="margin-bottom-50"></div>
			<News />
			<div className="margin-bottom-50"></div>
			<Contacts />
			<div className="margin-bottom-50"></div>
			<Description />
			<div className="margin-bottom-50"></div>
		</body>
	);
}

export default Mainpage;
