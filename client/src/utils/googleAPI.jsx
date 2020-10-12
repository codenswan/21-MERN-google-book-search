import axios from 'axios';

export default {
  searchGoogleBooks: async function (query) {
    const bookResults = await axios.get(
      `/api/search?title=${query}`
    );
    return bookResults;
  },
};
