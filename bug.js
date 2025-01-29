const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  const jsonData = {
    message: 'Hello from Node.js server!',
  };
  response.end(JSON.stringify(jsonData));
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

//Uncommon bug:  The server might not shutdown gracefully if a large number of requests are made rapidly or if there is an error handling that prevents the server from exiting properly.  The below code addresses that by handling errors.