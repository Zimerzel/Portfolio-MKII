import React from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

function ProjectCard(props) {
  return (
    <>
    <Container fluid="true">
      <Row xs={2} md={2} lg={3} className= "g-4">
        <Col xs={2} md={2} lg={2}>
          <Card>
            <Card.Img variant="top" alt={props.name} src={props.image} id="card-img"/>
            <Card.Body>
              <Card.Title id="card-title">{props.name}</Card.Title>
              <Card.Text id="card-topics">
                <p><q>{props.topics}</q></p>
                <p>{props.tech}</p>
              </Card.Text>
                <a href={props.github} target="blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
                <a href={props.deploy} target="blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
)}

export default ProjectCard;