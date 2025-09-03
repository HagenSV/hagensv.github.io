import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/Header";

const programmingLanguages = ["Java","Typescript","Javascript","HTML/CSS","Python","Kotlin","Scala","Swift","C"];
const toolsPlatforms = ["Junit","Git/Github","Figma","Linux/Bash","Socketio","Bootstrap","React","Electron","Java Swing","Flask","MS Office Suite","Jira","XCode","Mathematica","Discord.js"];
const otherSkills = ["Problem Solving","Agile","Scrum","QA Testing","Prompt Engineering","Communication","Teamwork","Customer Service"];

const toolStart = programmingLanguages.length*0.1+0.5
const otherStart = (programmingLanguages.length+toolsPlatforms.length)*0.1+1.0

const SkillsPage: React.FC = () => {
    return (
        <>
        < Header selected={2} />
        <main>
            <h1 className="type-cursor">Skills</h1>
            <p className="bold fade-in">Programming Languages:</p>
            <Container className="text-center">
                <Row>
                    {programmingLanguages.map((language, index) => (
                        <Col xs={6} sm={4} md={3} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }} key={language}>
                            <p>{language}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
            <p className="bold fade-in" style={{ animationDelay: `${toolStart}s` }}>Tools/Platforms:</p>
            <Container className="text-center">
                <Row>
                {toolsPlatforms.map((tool, index) => (
                        <Col xs={6} sm={4} md={3} className="fade-in" style={{ animationDelay: `${toolStart + (index+1) * 0.1}s` }} key={tool}>
                            <p>{tool}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
            <p className="bold fade-in" style={{ animationDelay: `${otherStart}s` }}>Other Skills:</p>
            <Container className="text-center">
                <Row>
                {otherSkills.map((tool, index) => (
                        <Col xs={6} sm={4} md={3} className="fade-in" style={{ animationDelay: `${otherStart + (index+1) * 0.1}s` }} key={tool}>
                            <p>{tool}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </main>
        </>
    );
};

export default SkillsPage;