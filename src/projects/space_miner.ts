import { ProjectData } from "../types/ProjectData";

const spaceMiner: ProjectData = {
    title: "Space Miner",
    year: 2022,
    type: "Class, Partner",
    tools: ["Java", "Java Swing", "Git"],
    accomplishments: ["Team lead, responsible for assignment submissions","Created github repository and configured branch rules","Used React and Typescript to create a responsive web app","Used Java and Spring Boot for the backend","Used Github for version control and collaboration"],
    about: "This project was the final project for AP computer science A. The goal was to create a program which displayed skills we learned in the class. I worked with a partner to create a basic game where you fly around in space mining astroids. The game featured multiple different materials, limited inventory space, and a space station where you could sell the materials and buy ship upgrades. The game was built using Java Swing for the GUI and Java for the game logic. I was responsible for the majority of the game logic and implementing the custom game engine. This was my first time using Java Swing, so it was a great learning experience.",
    //images: ["/images/space_miner/space_miner.png", "/images/space_miner/space_miner_shop.png", "/images/space_miner/space_miner_upgrades.png"], // Array of image URLs for the image gallery
    images: null,
    youtubeLink: null
}

export default spaceMiner;