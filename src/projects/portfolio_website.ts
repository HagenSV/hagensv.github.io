import { ProjectData } from "../types/ProjectData";

const portfolioWebsite: ProjectData = {
    title: "Portfolio Website",
    year: 2024,
    type: "Personal, Solo", 
    tools: ["Javascript","HTML/CSS","Bootstrap","Typescript","React","Github Actions"],
    accomplishments: ["Created 3 different iterations, each with different technologies and designs","First iteration was a simple HTML/CSS site","Second iteration used bootstrap to assist with styling","Third iteration was a complete rewrite using React and Typescript","Used Github Actions to deploy the site to Github Pages"],
    about: "This portfolio website showcases my projects and skills. It was built to demonstrate my web development abilities and to provide a platform for potential employers to learn more about me. The website has gone through multiple iterations, each improving upon the last in terms of design and functionality. The current version is built using React and Typescript, which allows for a more dynamic and interactive user experience.",
    images: null, // Array of image URLs for the image gallery, if any
    youtubeLink: null // YouTube link for a demo of the project, if any
}

export default portfolioWebsite; // Export the project data for use in other parts of the application, such as displaying project details or summaries