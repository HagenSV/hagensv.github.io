import React, { useState } from "react";
import Header from "../components/Header";
import { ProjectData } from "../../types/ProjectData";
import projects from "../../projects";


const toSummary = (project: ProjectData) => {
    return {
        title: project.title,
        year: project.year,
        type: project.type,
        tools: project.tools,
        accomplishments: project.accomplishments,
        animationDelay: 0,
        pageLink: project.about === "" ? null : `/projects/${project.title.toLowerCase().replace(" ","-")}`
    }
}

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
                <li className="fade-in" style={{ animationDelay: `${animationDelay + (index+1) * 0.1}s` }} key={index}>{ accomplishment }</li>)
            )}
        </ul>
        {/* <p><span className="bold">Purpose: </span>Final project for AP computer science A.</p> */}
        { pageLink && <a className="subheading btn" href={ pageLink }>LEARN MORE <span className="arrow-animate">{">"}</span></a> }
        </div>
    );
}

const projectSummaries = projects.map((project) => toSummary(project)) // Convert each project to a summary format

const Projects: React.FC = () => {

    const sortTypes = ["Default", "Newest First", "Oldest First"]; // Define the sort types, currently only one type for ascending order

    const [orderedProjects, setProjects] = useState<ProjectSummaryProps[]>(projectSummaries);
    const [sortType, setSortType] = useState<number>(0); // State to track the current sort type

    function handleClick() {

        const nextSort = (sortType + 1) % sortTypes.length; // Calculate the next sort type based on the current one, cycling through the available options

        setSortType(nextSort); // Cycle through the sort types'

        if (nextSort === 0) {
            // Default order (no sorting)
            setProjects(projects.map((project) => toSummary(project))); // Set to original order
            return;
        }
        
        const sortedProjects = [...orderedProjects].sort((a, b) => {
            // Sort projects by year descending, if years are equal sort by title alphabetically
            if (a.year === b.year) {
                return a.title.localeCompare(b.title);
            }
            return nextSort === 1 ? b.year - a.year : a.year - b.year; // For "Newest First", sort by year descending, for "Oldest First", sort by year ascending
        }); // This will sort the projects by year descending and then by title alphabetically if years are equal
        setProjects(sortedProjects); // Trigger a re-render to show the sorted projects. This is a workaround to ensure the state updates and reflects the sorted order.
    }

    return (
        <>
        < Header selected={3} />
        <main>
        <h1 className="type-cursor">Projects</h1>
        <button onClick={handleClick} className="btn sort-btn" style={{ marginBottom: "20px", padding: "10px 20px", fontSize: "16px" }}>
            Sort: {sortTypes[sortType]}
        </button>
        { orderedProjects.map((project,index) => (
            <ProjectSummary
                key={index}
                title={project.title}
                year={project.year}
                type={project.type}
                tools={project.tools}
                accomplishments={project.accomplishments}
                animationDelay={index+1}
                pageLink={project.pageLink}
            />
        )) }
        </main>
        </>
    );
}

export default Projects;