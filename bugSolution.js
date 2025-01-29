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

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  server.close(() => {
    console.log('Server closed due to uncaught exception.');
    process.exit(1);
  });
});

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  server.close(() => {
      console.log('Server closed due to unhandledRejection');
      process.exit(1);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});