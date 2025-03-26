import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const programmingLanguages = ["Java","JavaScript","HTML/CSS","Scala","Swift","Python","C"];
const toolsPlatforms = ["Linux/Bash","Git/Github","Junit","Mathematica","Java Swing","Discord.js","Flask","Socketio","Bootstrap","React"];

const SkillsPage: React.FC = () => {
    return (
        <main>
            <h1 className="type-cursor">Skills</h1>
            <p className="bold fade-in">Programming Languages:</p>
            <Container className="text-center">
                <Row>
                    {programmingLanguages.map((language, index) => (
                        <div className="col-6 col-md-3 fade-in" style={{ animationDelay: `${index * 0.1}s` }} key={language}>
                            <p>{language}</p>
                        </div>
                    ))}
                </Row>
            </Container>
            <p className="bold fade-in" style={{ animationDelay: "1.1s" }}>Tools/Platforms:</p>
            <Container className="text-center">
                <Row>
                {toolsPlatforms.map((tool, index) => (
                        <div className="col-6 col-md-3 fade-in" style={{ animationDelay: `${1.2 + index * 0.1}s` }} key={tool}>
                            <p>{tool}</p>
                        </div>
                    ))}
                </Row>
            </Container>
        </main>
    );
};

export default SkillsPage;