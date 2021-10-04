import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import HomeUI from '../HomeUI.js/HomeUI';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    
    useEffect(()=>{
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])

    const newArray = Array.from(courses).slice(0, 4);
    
    const handleAllCourses = () => {
        history.push("/courses");
    };
    
    return (
        <div className="home-container">
            <h1>Welcome to Learning Academy</h1>
            <h2>Our Special Courses</h2>
            <Row xs={1} md={2} className="g-5">
                {
                    newArray.map(course => <HomeUI
                    key={course.id}
                    course={course}
                    ></HomeUI>)
                }
            </Row>
            <button onClick={handleAllCourses}>See All Courses</button>
        </div>
    );
};

export default Home;