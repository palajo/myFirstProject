import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Form, InputGroup } from 'react-bootstrap';

import logowhite from '../img/logo-white.svg';
import mainmenuwhite from '../img/main-menu-white.svg';

function closeNav() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sidenav").style.left = "-340px";
}

function SidebarElement (props){
	return(
        <li className="nav-item">
            <a className="nav-link" href={props.Link}>{props.Text}</a>
        </li>
	);
}

function Sidebar() {
	return(

        <div className="sidenav" id="sidenav">

            <Container fluid>
                <Row className="margin-bottom-30 padding-left-right-20">
                    <Col>
                        <img src={mainmenuwhite} height="50px" className="menuToggle margin-right-20" onClick={closeNav} />
                        <img src={logowhite} height="50px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="nav flex-column SidebarMenu">
                            <SidebarElement Link="#" Text="Menu 1" />
                            <SidebarElement Link="#" Text="Menu 2" />
                            <SidebarElement Link="#" Text="Menu 3" />
                            <SidebarElement Link="#" Text="Menu 4" />
                            <SidebarElement Link="#" Text="Menu 5" />
                            <SidebarElement Link="#" Text="Menu 6" />
                            <SidebarElement Link="#" Text="Menu 7" />
                            <SidebarElement Link="#" Text="Menu 8" />
                            <SidebarElement Link="#" Text="Menu 9" />
                            <SidebarElement Link="#" Text="Menu 10" />
                        </ul>
                    </Col>
                </Row>
            </Container>
		</div>
    );
}

export default Sidebar;
