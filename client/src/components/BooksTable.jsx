import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

export default function BooksTable(props) {
  return (
    <Container fluid>
      {props.books.map((book) => (
        <Card key={book.ID}>
          <Card.Header>
            <Card.Img src={book.Image} style={{ width: '18rem' }} />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {book.Title}: <Card.Subtitle>{book.Subtitle}</Card.Subtitle>
            </Card.Title>
            <Card.Text> Author: {book.Author}</Card.Text>
            <Card.Text> Desciption: {book.Description} </Card.Text>
            <Button onClick={() => props.handleSaveBtn(book)} variant="primary">Save</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
