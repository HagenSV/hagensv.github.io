import React from "react";
import Header from "../components/Header";

const courses = ["Java 1 and 2","Data Structures","Parallel Computing","Data Communication","Theory of Algorithms","Web Programming","iOS Development","Software Engineering"];

const Education: React.FC = () => {
    return (
        <>
        < Header selected={1} />
        <main>
            <h1 className="type-cursor">Education</h1>
            <h3 className="subheading fade-in">Grove City College</h3>
            <p className="subheading fade-in" style={{ animationDelay: "0.25s" }}>Class of 2026</p>
            <p className="fade-in" style={{ animationDelay: "1s" }}><span className="bold">Major:</span> B.S. Computer Science (ABET accredited)</p>
            <p className="fade-in" style={{ animationDelay: "1.5s" }}><span className="bold">Minor:</span> Mobile Development</p>
            <p className="fade-in" style={{ animationDelay: "2s" }}><span className="bold">GPA:</span> 3.57 in major, 3.3 overall</p>
            <p className="fade-in" style={{ animationDelay: "2.5s" }}><span className="bold">Courses:</span></p>
            <ul>
                {courses.map((course, index) => (
                    <li className="fade-in" style={{ animationDelay: `${3 + index * 0.1}s` }} key={course}>{course}</li>
                ))}
            </ul>
        </main>
        </>
    );
};

export default Education;