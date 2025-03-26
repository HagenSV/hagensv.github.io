import React from "react";

const Education: React.FC = () => {
    return (
        <main>
            <h1 className="type-cursor">Education</h1>
            <h3 className="subheading fade-in">Grove City College</h3>
            <p className="subheading fade-in" style={{ animationDelay: "0.25s" }}>Class of 2026</p>
            <p className="fade-in" style={{ animationDelay: "1s" }}><span className="bold">Major:</span> B.S. Computer Science (ABET accredited)</p>
            <p className="fade-in" style={{ animationDelay: "1.5s" }}><span className="bold">Minor:</span> Mobile Development</p>
            <p className="fade-in" style={{ animationDelay: "2s" }}><span className="bold">GPA:</span> 3.57 in major, 3.3 overall</p>
            <p className="fade-in" style={{ animationDelay: "2.5s" }}><span className="bold">Courses:</span></p>
            <ul>
                <li className="fade-in" style={{ animationDelay: "3.1s" }}>Java 1 and 2</li>
                <li className="fade-in" style={{ animationDelay: "3.2s" }}>Data Structures</li>
                <li className="fade-in" style={{ animationDelay: "3.3s" }}>Parallel Computing</li>
                <li className="fade-in" style={{ animationDelay: "3.4s" }}>Data Communication</li>
                <li className="fade-in" style={{ animationDelay: "3.5s" }}>Theory of Algorithms</li>
                <li className="fade-in" style={{ animationDelay: "3.6s" }}>Web Programming</li>
                <li className="fade-in" style={{ animationDelay: "3.7s" }}>iOS Development</li>
            </ul>
        </main>
    );
};

export default Education;