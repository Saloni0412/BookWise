const axios = require('axios');
require('dotenv').config();

async function getBookImage(bookTitle) {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        // we should convert this to .env for security -dre
        Authorization: process.env.API_KEY,
      },
      params: {
        query: bookTitle,
        orientation: 'landscape',
      },
    });

    if (response.data.urls && response.data.urls.regular) {
      return response.data.urls.regular;
      // this image size can be changed to small or thumbnail -dre
    }

    return null;
  } catch (error) {
    console.error('Error fetching book image:', error);
    return null;
  }
}

module.exports = getBookImage;