const axios = require('axios');

async function getBookImage(bookTitle) {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        // we should convert this to .env for security -dre
        Authorization: 'forYLZWTGMVee-XDkvQgSawGMqlSsFlFDk9KQCw6vZE',
      },
      params: {
        query: bookTitle,
        orientation: 'landscape',
      },
    });

    if (response.data.urls && response.data.urls.regular) {
      return response.data.urls.regular;
    }

    return null;
  } catch (error) {
    console.error('Error fetching book image:', error);
    return null;
  }
}

module.exports = getBookImage;