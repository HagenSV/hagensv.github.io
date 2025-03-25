"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./Navbar.css"); // Assuming you have a CSS file for custom styles
const NavbarItem = ({ href, className, text }) => {
    return (react_1.default.createElement(react_bootstrap_1.Col, { xs: 6, md: 3 },
        react_1.default.createElement("a", { href: href, className: `btn ${className}` }, text)));
};
const Navbar = () => {
    return (react_1.default.createElement(react_bootstrap_1.Container, null,
        react_1.default.createElement(react_bootstrap_1.Row, { className: "row justify-content-center gy-3", id: "nav" },
            react_1.default.createElement(NavbarItem, { href: "/", className: "selected", text: "Education" }),
            react_1.default.createElement(NavbarItem, { href: "/skills", className: "", text: "Skills" }),
            react_1.default.createElement(NavbarItem, { href: "/projects", className: "", text: "Projects" }),
            react_1.default.createElement(NavbarItem, { href: "mailto:svhagen594+careers@gmail.com", className: "green", text: "Contact" }))));
};
exports.default = Navbar;
