import React from 'react';
import {  Card , ListGroup, ListGroupItem} from 'react-bootstrap';
const { v4: uuidv4 } = require("uuid");

export const CharCard = (props) => {
  const { name, image, gender, status } = props;
  return (
  <div className= "p-1 col-md-3 col-xs-12 col-sm-6">
    <Card style={{ width: '18rem' }} key={uuidv4()}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Gender: {gender}</ListGroupItem>
      <ListGroupItem>Status: {status}</ListGroupItem>
    </ListGroup>
    </Card>
  </div>
    
  );
};

