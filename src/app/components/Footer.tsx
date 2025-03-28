import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for custom styles

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 text-center">
                        <p>© 2024 - {new Date().getFullYear()} Samuel Hagen</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;