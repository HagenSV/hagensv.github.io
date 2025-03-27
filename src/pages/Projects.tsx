import React from "react";
import Header from "../components/Header";

interface ProjectProps {
    title: string;
    year: number;
    type: string;
    tools: Array<string>;
    animationDelay: number;
    pageLink?: string | null;
}

const Project: React.FC<ProjectProps> = ({ title, year, type, tools, animationDelay, pageLink }) => {
    return (
        <div className="project fade-in" style={{ animationDelay: `${animationDelay}s` }}>
        <h2 className="subheading">{ title } ({ year })</h2>
        <p><span className="bold">Project Type: </span>{ type }</p>
        <p><span className="bold">Languages/Tools: </span>{ tools.join(", ") }</p>
        <p><span className="bold">Purpose: </span>Final project for AP computer science A.</p>
        { pageLink && <a className="subheading btn" href={ pageLink }>LEARN MORE <span className="arrow-animate">{">"}</span></a> }
        </div>
    );
}

const Projects: React.FC = () => {
    return (
        <>
        < Header selected={3} />
        <main>
        <Project title="Boxed Up Games" year={2022} type="Personal, Solo" tools={["Javascript","HTML/CSS","Electron"]} animationDelay={1} />
        </main>
        </>
    );
}

export default Projects;