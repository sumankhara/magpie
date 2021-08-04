import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { categories } from '../../static.json';

import technical from '../images/technical.jpeg';
import fiction from '../images/fiction.jpeg';
import history from '../images/history.jpeg';

import { Link } from 'react-router-dom';

function getProperties(categoryType) {
  if(categoryType === 'Science and Technology') {
    return {image: technical, link: "/technical"};
  }
  else if(categoryType === 'Fiction') {
    return {image: fiction, link: "/fiction"};
  }
  else if(categoryType === 'History') {
    return {image: history, link: "/history"};
  }
}

export default function Home() {
  return(
    <Container>
        <Row>
          {categories.map((category, index) => (
            <Col>
            <Card style={{ width: '25rem', height: '25rem' }}>
              <Card.Img variant="top" src={getProperties(category.type).image} style={{height: '10rem'}} />
              <Card.Body>
                <Card.Title>{category.type}</Card.Title>
                <Card.Text>
                  {category.message}
                </Card.Text>
                <Button variant="primary">
                  <Link to={getProperties(category.type).link} className="btn btn-header">
                    <span>Browse</span>
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          ))}
        </Row>
      </Container>
  );
}