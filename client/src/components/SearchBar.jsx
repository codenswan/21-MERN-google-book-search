import React from 'react';
import {
    Button,
    FormControl,
    InputGroup,
    Jumbotron,
  } from 'react-bootstrap';

export default function SearchBar(props) {
  return (
    <Jumbotron>
      <label>Search for a book</label>
      <InputGroup className="mb-3">
        <FormControl
          onChange={props.handleInputChange}
          value={props.searchTerm}
          name="GoogleBookSearch"
          type="text"
          placeholder="Enter something to search for"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button
            type="submit"
            onClick={props.handleFormSubmit}
            variant="outline-secondary"
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
}
