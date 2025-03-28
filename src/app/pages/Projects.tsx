import React from "react";
import Header from "../components/Header";
import { ProjectData } from "../../types/ProjectData";
import projects from "../../projects";

let animationDelay = 0;

const toSummary = (project: ProjectData) => {
    animationDelay += 1;
    return {
        title: project.title,
        year: project.year,
        type: project.type,
        tools: project.tools,
        accomplishments: project.accomplishments,
        animationDelay: animationDelay,
        pageLink: project.about === "" ? null : `/projects/${project.title.toLowerCase().replace(" ","-")}`
    }
}

const projectSummaries = projects.map((project) => toSummary(project)) // Convert each project to a summary format
interface ProjectSummaryProps {
    title: string;
    year: number;
    type: string;
    tools: Array<string>;
    accomplishments: Array<string>;
    animationDelay: number;
    pageLink?: string | null;
}

const ProjectSummary: React.FC<ProjectSummaryProps> = ({ title, year, type, tools, accomplishments, animationDelay, pageLink }) => {
    return (
        <div className="project fade-in" style={{ animationDelay: `${animationDelay}s` }}>
        <h2 className="subheading">{ title } ({ year })</h2>
        <p><span className="bold">Project Type: </span>{ type }</p>
        <p><span className="bold">Languages/Tools: </span>{ tools.join(", ") }</p>
        <p><span className="bold">Accomplishments: </span></p>
        <ul>
            {accomplishments.map((accomplishment, index) => (
                <li className="fade-in" style={{ animationDelay: `${animationDelay + (index+1) * 0.1}s` }} key={accomplishment}>{ accomplishment }</li>)
            )}
        </ul>
        {/* <p><span className="bold">Purpose: </span>Final project for AP computer science A.</p> */}
        { pageLink && <a className="subheading btn" href={ pageLink }>LEARN MORE <span className="arrow-animate">{">"}</span></a> }
        </div>
    );
}

const Projects: React.FC = () => {
    return (
        <>
        < Header selected={3} />
        <main>
        <h1 className="type-cursor">Projects</h1>
        { projectSummaries.map((project, index) => (
            <ProjectSummary
                key={index}
                title={project.title}
                year={project.year}
                type={project.type}
                tools={project.tools}
                accomplishments={project.accomplishments}
                animationDelay={project.animationDelay}
                pageLink={project.pageLink}
            />
        )) }
        </main>
        </>
    );
}

export default Projects;