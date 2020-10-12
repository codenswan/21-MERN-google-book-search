import React, { useState } from 'react';
import GAPI from '../utils/googleAPI';
import API from '../utils/api'
import SearchBar from '../components/SearchBar';
import BooksTable from '../components/BooksTable';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchedBooks, setFetchedBooks] = useState([]);

  const searchGoogleBooksAPI = async (query) => {
    try {
      let response = await GAPI.searchGoogleBooks(query);
      setFetchedBooks(response.data);
    } catch (error) {
      if (fetchedBooks.length === 0) {
        console.error('Try another search');
      }
        console.log(error)
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    searchGoogleBooksAPI(searchTerm);
  };

  const handleSaveBtn = (bookData) => {
    // await API.saveBook(bookData);
    console.log(bookData);
  }

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit} />
    
      <BooksTable handleSaveBtn={handleSaveBtn} books={fetchedBooks}/>
    </div>
  );
}
