# Node.js Server - Graceful Shutdown

This repository demonstrates a common issue in Node.js servers where they might not shutdown gracefully under high load or unexpected errors. The `bug.js` file shows a server susceptible to this issue, while `bugSolution.js` presents a solution that addresses this.

## Problem Description

A Node.js server could fail to shut down cleanly if it encounters numerous concurrent requests or errors during its operation. This can lead to resource leaks and potential instability.  This issue stems from the server's inability to properly handle exceptions or to cleanly close open resources before terminating.

## Solution

The solution incorporates error handling and employs the `server.close()` method to ensure a graceful shutdown process. This method ensures that all pending requests are processed before the server stops, thereby preventing abrupt termination and data loss.  It also logs any errors during shutdown. 

## Setup

1. Clone the repository
2. Run `npm install`
3. Execute `node bug.js` and then `node bugSolution.js` to observe the differences


## License

MIT