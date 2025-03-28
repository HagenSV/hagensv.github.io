import React from "react";
import Header from "../components/Header";

interface ProjectData {
    title: string;
    year: number;
    type: string;
    tools: Array<string>;
    accomplishments: Array<string>;
    about: string;
    images: Array<string> | null; // Optional array of image URLs for the image gallery
    youtubeLink: string | null; // Optional link to a YouTube video for the project
}

interface Project {
    project: ProjectData
}

const ProjectDetails: React.FC<Project> = ({ project }) => {
    return (
        <>
            < Header selected={3} />
            <main>
            <h1 className="type-cursor">{ project.title } ({ project.year })</h1>
            <p><span className="bold">Project Type: </span>{ project.type }</p>
            <p><span className="bold">Languages/Tools: </span>{ project.tools.join(", ") }</p>
            <p><span className="bold">Accomplishments: </span></p>
            <ul>
                {project.accomplishments.map((accomplishment, index) => (
                    <li className="fade-in" style={{ animationDelay: `${ (index+1) * 0.1}s` }} key={accomplishment}>{ accomplishment }</li>)
                )}
            </ul>
            <p><span className="bold">About: </span>{project.about}</p>
            { project.images && (
                <>
                <p><span className="bold">Gallery: </span></p>
                {project.images.map((image, index) => (
                    <div key={index} style={{ margin: "10px 0", textAlign: "center" }}>
                        <img src={image} alt={`Project screenshot ${index + 1}`} style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px" }} />
                    </div>
                ))}
                </>
            )}

            { project.youtubeLink && (
            <>
            <p><span className="bold">Demo: </span></p>
            <div style={{ textAlign: "center" }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KxdFo6cqBT4?si=xfvHM9eN7da0CEHD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> 
            </>
            )}           
            </main>
        </>
    )
}

export { ProjectDetails };
export type { ProjectData };