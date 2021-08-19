import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ price, description, image, title }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description.slice(0, 50)}</Card.Text>
        <Card.Subtitle>"price = $"{price}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
