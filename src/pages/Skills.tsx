import React from "react";

const SkillsPage: React.FC = () => {
    return (
        <main>
            <h1 className="type-cursor">Skills</h1>

            <p className="bold fade-in">Programming Languages:</p>
            <div className="container text-center">
                <div className="row justify-content-center" id="nav">
                    <div className="col-6 col-md-3 fade-in">
                        <p>Java</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.1s" }}>
                        <p>JavaScript</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.2s" }}>
                        <p>HTML/CSS</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.3s" }}>
                        <p>Scala</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.4s" }}>
                        <p>Swift</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.5s" }}>
                        <p>Python</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.6s" }}>
                        <p>C</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.6s" }}>
                        <p></p>
                    </div>
                </div>
            </div>
            <p className="bold fade-in" style={{ animationDelay: "1.1s" }}>Tools/Platforms:</p>
            <div className="container text-center">
                <div className="row">
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.2s" }}>
                        <p>Linux/Bash</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.3s" }}>
                        <p>Git/Github</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.4s" }}>
                        <p>Junit</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.5s" }}>
                        <p>Mathematica</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.6s" }}>
                        <p>Java Swing</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.7s" }}>
                        <p>Discord.js</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.8s" }}>
                        <p>Flask</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "1.9s" }}>
                        <p>Socketio</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "2.0s" }}>
                        <p>Bootstrap</p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.1s" }}>
                        <p></p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.1s" }}>
                        <p></p>
                    </div>
                    <div className="col-6 col-md-3 fade-in" style={{ animationDelay: "0.1s" }}>
                        <p></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SkillsPage;