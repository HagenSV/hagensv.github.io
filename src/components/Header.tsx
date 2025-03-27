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
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css'; // Assuming you have a CSS file for custom styles

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

interface HeaderProps {
    selected: number;
}

const Header: React.FC<HeaderProps> = ({ selected = 1 }) => {
    return (
        <>
        <header className="text-center">
            <h1>Samuel V. Hagen</h1>
            <p>Full Stack Developer • Software Engineer</p>
        </header>
        <div id="nav">
        <Container className="text-center">
        <Row className="justify-content-center gy-3">
            <NavbarItem href="/" selected={selected === 1} text="Education" />
            <NavbarItem href="/skills" selected={selected === 2} text="Skills" />
            <NavbarItem href="/projects" selected={selected === 3} text="Projects" />
            <ContactBtn />
        </Row>
        </Container>
        </div>
        </>
    )
}

export default Header;