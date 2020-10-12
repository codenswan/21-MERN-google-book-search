const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

router.get('/search', async (req, res) => {
  try {
    let results = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${req.query.title}&key=${API_KEY}`
    );
    let formattedResults = await results.data.items.map(book => {
      return {
        Title: book.volumeInfo.title,
        Subtitle: book.volumeInfo.subtitle,
        Author: book.volumeInfo.authors,
        Description: book.volumeInfo.description,
        Image: book.volumeInfo.imageLinks.thumbnail,
        ID: book.id
      }
    })
    res.json(formattedResults);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
