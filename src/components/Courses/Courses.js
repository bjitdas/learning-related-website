import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    // console.log(courses);
    useEffect(()=>{
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    },[])

    
    return (
        <div className="course-container">
            <h2 style={{textAlign: 'center'}}>Our All Courses</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <Course
                    key={course.id}
                    course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;