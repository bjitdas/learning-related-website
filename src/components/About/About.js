import React from 'react';

const About = () => {
    return (
        <div  style={{margin: '20px'}}>
            <div>
                <h3>Learning Academy</h3>
                <p>Learning Academy is a 21st-century career-focused online school. We are on a mission to find untapped or underutilized talent and to train them for the most in-demand jobs in the world. Masai School is introducing a new model of higher education in which the school invests in the students, instead of the other way around.</p>
            </div>
            <div className="div">
                <h3>Our executive team</h3>
                <p>With more than 50 years of combined experience in technology and engineering, our Executive Team has one common goal - “Unlock the human potential of India by transforming the education system”</p>
                <ul>
                    <li>
                        <h6>Yogesh Bhat</h6>
                        <p>Co-Founder and CEO</p>
                    </li>
                    <li>
                        <h6>Nrupul Dev</h6>
                        <p>Co-Founder and CTO</p>
                    </li>
                    <li>
                        <h6>Ankur Kayesth</h6>
                        <p>Senior Vice President</p>
                    </li>
                    <li>
                        <h6>Sumeet Kumar</h6>
                        <p>Career Coach</p>
                    </li>
                    <li>
                        <h6>Prateek Shukla</h6>
                        <p>Instructional Associate</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;