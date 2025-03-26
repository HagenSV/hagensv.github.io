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
    className: string;
    text: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, className, text }) => {
    return (
        <Col xs={6} md={3}>
            <a href={href} className={`btn ${className}`}>
                {text}
            </a>
        </Col>
    )
}

const Navbar: React.FC = () => {
    return (
        <Container className="text-center">
        <Row className="row justify-content-center gy-3" id="nav">
            <NavbarItem href="/" className="selected" text="Education" />
            <NavbarItem href="/skills" className="" text="Skills" />
            <NavbarItem href="/projects" className="" text="Projects" />
            <NavbarItem href="mailto:svhagen594+careers@gmail.com" className="green" text="Contact" />
        </Row>
        </Container>
    )
}

export default Navbar;