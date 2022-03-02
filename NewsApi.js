const mainEndpoint = 'https://newsapi.org/v2/top-headlines?';
const query = 'q=bitcoin&';
const apiKey = 'apiKey=5a5a002512d542e88acd8778194f3c60';

const url = `${mainEndpoint}${query}${apiKey}`;

fetch(url)
  .then(response => {
    console.log(response.json())
  })