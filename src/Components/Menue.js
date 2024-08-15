import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Menue = () => {

  const cards = [
    {
      imgSrc: "images/fast food 1.jpg",
      text: "has been designed from the start for gradual adoption, and you can use as little or as much React as you need. ",
      price: "$ 450.34"
    },

    {
      imgSrc: "images/fast food 2.jpg",
      text: "This card has supporting text below as a natural lead-in to additional content.",
      price: "$ 400.29"
    },

    {
      imgSrc: "images/fast food 3.jpg",
      text: "This is a wider with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      price: "$ 390.38"
    },

    {
      imgSrc: "images/fast food 4.jpg",
      text: "This with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
      price: "$ 390.38"
    },

    {
      imgSrc: "images/fast food 5.jpg",
      text: "This is with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      price: "$ 450.34"
    },

    {
      imgSrc: "images/fast food 6.jpg",
      text: " has supporting text below as a natural lead-in to additional content.",
      price: "$ 400.29"
    },

  ];

  return (
    <div>
      <nav className="nav-bar">MENU</nav>
      <Container>
        <Row>
          {cards.map((card, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">{card.price}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  );
};

export default Menue;