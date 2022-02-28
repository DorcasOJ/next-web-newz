const dev = process.env.NODE_ENV !== 'production'

export const api = `https://newsapi.org/v2/everything?q=web&q=tech&language=en&apiKey=${process.env.apiKey}`

export const server = dev ? 'http://localhost:3000' : 'https://yourwebsite.com'

console.log(api)
// var url ='https://newsapi.org/v2/everything?' +
//           'q=web&' + 'q=tech&' + 'language=en&' +
//           'apiKey=f69b33c1639044108e76fc692e1bd9d6';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })