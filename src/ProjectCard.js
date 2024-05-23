// ProjectCard.js
import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap'

const ProjectCard = ({ title, description, imgSrc, liveLink, codeLink, classColor }) => {
  return (
    <Card className={`${classColor} project-card mb-4`}>
      <Row noGutters className="align-items-center">
        <Col md={6}>
          <Card.Img variant="top" src={imgSrc} />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
              <Button className="button" variant="primary" href={liveLink} target="_blank" rel="noopener noreferrer">
                View Project
              </Button>
              {/* <Button variant="secondary" href={codeLink} target="_blank" rel="noopener noreferrer">
                View Code
              </Button> */}
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;