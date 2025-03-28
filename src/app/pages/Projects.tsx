import React from "react";
import Header from "../components/Header";


let animationDelay = 0;
const projectData = (title: string, year: number, type: string, tools: Array<string>, accomplishments: Array<string>, pageLink: boolean = false ) => {
    animationDelay += 1;
    return {
        title: title,
        year: year,
        type: type,
        tools: tools,
        accomplishments: accomplishments,
        animationDelay: animationDelay,
        pageLink: pageLink ? `/projects/${title.toLowerCase().replace(" ","-")}` : null
    }
}

const projects = [
    projectData(
        "Student Scheduler", 2025, "Class, Group",
        ["Java","Git","Github","React","Typescript","HTML/CSS"],
        ["Team lead, responsible for assignment submissions","Created github repository and configured branch rules","Used React and Typescript to create a responsive web app","Used Java and Spring Boot for the backend","Used Github for version control and collaboration"],
    ),
    projectData(
        "Boxed Up Games", 2024, "Personal, Solo", 
        ["Javascript","HTML/CSS","Electron","Socketio","Node.js","Express"],
        ["Created locally hosted multiplayer game using socket.io and express","Taught myself electron to create a desktop app","Used HTML/CSS for the frontend","Published game to gamejolt.com","Used Github for version control"],
    ),
    projectData(
        "OurGCC", 2024, "Class, Partner", 
        ["Swift","SwiftUI","Xcode","Github"],
        ["Created a mobile app for the Grove City College campus","Used Swift and SwiftUI to create a native iOS app","Used Xcode to develop and test the app","Created a custom API to interface with the app","Used Github for version control and collaboration"],
    ),
    projectData(
        "Portfolio Website", 2024, "Personal, Solo", 
        ["Javascript","HTML/CSS","Bootstrap","Typescript","React","Github Actions"],
        ["Created 3 different iterations, each with different technologies and designs","First iteration was a simple HTML/CSS site","Second iteration used bootstrap to assist with styling","Third iteration was a complete rewrite using React and Typescript","Used Github Actions to deploy the site to Github Pages"],
    ),
    projectData(
        "Space Miner", 2022, "Class, Partner",
        ["Java","Java Swing","Git"],
        ["Created github repository","Primary developer for game logic","Taught myself java swing library","Created a custom game engine"]
    )
];
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
        { projects.map((project, index) => (
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