import React from 'react';

const Success = () => {
    return (
        <div className="m-5">
            <h2>Here is our alumni and what they say about our academy</h2>
            <ul>
                <li>
                    <h5>Shawn Wang in Singapore</h5>
                    <p>Software Engineer at Amazon</p>
                    <p>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."</p>
                </li>
                <li>
                    <h5>Sarah Chima in Nigeria</h5>
                    <p>Software Engineer at ChatDesk</p>
                    <p>"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."</p>
                </li>
                <li>
                    <h5>Emma Bostian in Sweden</h5>
                    <p>Software Engineer at Spotify</p>
                    <p>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
                </li>
            </ul>
        </div>
    );
};

export default Success;