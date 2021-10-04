import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeUI.css'

const HomeUI = (props) => {
    const {name, description, img, duration, articles} = props.course;

    return (
        <div>
             <Col>
                <Card  className="home-ui">
                    <Card.Img style={{width: '100%', height: '280px'}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <p>Articles: {articles  }</p>
                    </Card.Body>
                    <Card.Footer>
                         <small>Duration: {duration}</small>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default HomeUI;