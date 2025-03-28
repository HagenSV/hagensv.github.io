import React from "react";
import Header from "../components/Header";

interface ProjectDetailsProps {
    title: string;
    year: number;
    type: string;
    tools: Array<string>;
    accomplishments: Array<string>;
    about: string;
    images: Array<string> | null; // Optional array of image URLs for the image gallery
    youtubeLink: string | null; // Optional link to a YouTube video for the project
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ title, year, type, tools, accomplishments, about, images, youtubeLink = null}) => {
    return (
        <>
            < Header selected={3} />
            <main>
            <h1 className="type-cursor">{ title } ({ year })</h1>
            <p><span className="bold">Project Type: </span>{ type }</p>
            <p><span className="bold">Languages/Tools: </span>{ tools.join(", ") }</p>
            <p><span className="bold">Accomplishments: </span></p>
            <ul>
                {accomplishments.map((accomplishment, index) => (
                    <li className="fade-in" style={{ animationDelay: `${ (index+1) * 0.1}s` }} key={accomplishment}>{ accomplishment }</li>)
                )}
            </ul>
            <p><span className="bold">About: </span>{about}</p>
            { images && (
                <>
                <p><span className="bold">Gallery: </span></p>
                {images.map((image, index) => (
                    <div key={index} style={{ margin: "10px 0", textAlign: "center" }}>
                        <img src={image} alt={`Project screenshot ${index + 1}`} style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "8px" }} />
                    </div>
                ))}
                </>
            )}

            { youtubeLink && (
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