import React, { useEffect, useState } from 'react';
import BooksTable from '../components/BooksTable';
import API from '../utils/api';

const SavedPage = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    fetchSavedBooks();
  }, []);

  const fetchSavedBooks = async () => {
    try {
      const response = await API.getBooks();
      setSavedBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteButton = async (id) => {
    try {
      await API.deleteBook(id);
      fetchSavedBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BooksTable books={savedBooks} deleteButton={deleteButton}></BooksTable>
    </div>
  );
}

export default SavedPage;