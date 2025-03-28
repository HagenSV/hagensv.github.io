import React from "react";
import Header from "../components/Header";

const NotFound: React.FC = () => {
    return (
        <>
        < Header selected={0} />
        <main>
            <h1>404 Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
        </main>
        </>
    );
}

export default NotFound;