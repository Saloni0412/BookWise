const axios = require('axios');
async function getBookImage(bookName) {
  //const clientId = process.env.API_KEY; // Replace with your actual client ID or access token
  const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(bookName)}&client_id=forYLZWTGMVee-XDkvQgSawGMqlSsFlFDk9KQCw6vZE`;
  try {
    const response = await axios.get(apiUrl);
    const image = response.data.results[0].urls.regular;
    return image;
  } catch (error) {
    console.log('An error occurred:', error.message);
  }
}
module.exports = getBookImage;
