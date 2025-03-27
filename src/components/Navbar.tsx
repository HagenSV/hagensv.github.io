/**
 * <div class="row justify-content-center gy-3" id="nav">
        <div class="col-6 col-md-3">
            <a href="/" class="btn">Education</a>
        </div>
        <div class="col-6 col-md-3">
            <a href="/skills.html" class="btn selected">Skills</a>
        </div>
        <div class="col-6 col-md-3">
            <a href="/projects.html" class="btn">Projects</a>
        </div>
        <div class="col-6 col-md-3">
            <a href="mailto:svhagen594+careers@gmail.com" class="btn green">Contact</a>
        </div>
    </div>
 */
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Navbar.css'; // Assuming you have a CSS file for custom styles

interface NavbarItemProps {
    href: string;
    selected: boolean;
    text: string;
}

const ContactBtn: React.FC = () => {
    return (
        <Col xs={6} md={3}>
            <a href="mailto:svhagen594+careers@gmail.com" className="btn green">
                Contact
            </a>
        </Col>
    )
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, selected, text }) => {
    return (
        <Col xs={6} md={3}>
            <a href={href} className={`btn ${selected ? "selected" : ""}`}>
                {text}
            </a>
        </Col>
    )
}

interface NavbarProps {
    selected: number;
}

const Navbar: React.FC<NavbarProps> = ({ selected = 1 }) => {
    return (
        <Container className="text-center">
        <Row className="row justify-content-center gy-3" id="nav">
            <NavbarItem href="/" selected={selected == 1} text="Education" />
            <NavbarItem href="/skills" selected={selected == 2} text="Skills" />
            <NavbarItem href="/projects" selected={selected == 3} text="Projects" />
            <ContactBtn />
        </Row>
        </Container>
    )
}

export default Navbar;