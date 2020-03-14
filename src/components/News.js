import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import newsimage from '../img/news.jpg';

function NewsBlock (props){
	return(
		<Col>
			<Row>
				<img src={props.NewsImage} width="100%" />
			</Row>
			<Row>
				<p className="NewsHeading">{props.NewsDescription}</p>
			</Row>
		</Col>
	);
}

function News() {
	return(
		<Container>
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Latest news</h2>
			</Row>
			<Row className="NewsBlock">
				<NewsBlock NewsImage={newsimage} NewsDescription="Happy new year!" />
				<NewsBlock NewsImage={newsimage} NewsDescription="Happy new year!" />
				<NewsBlock NewsImage={newsimage} NewsDescription="Happy new year!" />
				<NewsBlock NewsImage={newsimage} NewsDescription="Happy new year!" />
			</Row>
		</Container>
    );
}

export default News;
