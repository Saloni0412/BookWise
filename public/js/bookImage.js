const axios = require('axios');
require('dotenv').config();

// this function will takes book title param and generates an unsplash url associated with search term
async function getBookImage(bookTitle) {
  const clientId = process.env.API_KEY;
  const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(bookTitle)}&client_id=${clientId}`;

  try {
    const response = await axios.get(apiUrl);
    const image = response.data.results[0].urls.regular; //this can be passed on
    console.log('Book Image:', image); // for testing, can be removed
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}

//this has been tested externally and will return the url for us to add to page. -Dre

module.exports = getBookImage;