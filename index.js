// session 1 
const http = require("http");
const { stringify } = require("querystring");
const currencies = require("./currencies.json");
const data = currencies.data;

const server = http.createServer((req, res) => {
    console.log("hello from server 2");
    // //to log server date and time;
    // const date = new Date().toLocaleDateString();
    // const time = new Date().toLocaleTimeString();
    // console.log(`the date is ${date} and time is ${time}`);
    // const serverInfo = {
    //     serverName: "Crio Server",
    //     version: "1.0.0",
    //     currentDate: new Date().toDateString(),
    //     currentTime: new Date().toTimeString(),
    // };
    // if (req.url === "/status") {
    //     res.writeHead(200, { "Content-Type": "application/json" }); //Adding Headers
    //     res.write(JSON.stringify(serverInfo));
    //     res.end();
    // } else {
    //     res.writeHead(200, { "Content-Type": "text/html" }); //Adding Headers
    //     res.write(`<h1>Hello from server</h1>`);
    //     res.end();
    // }
    if (req.url === "/currencies") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
        res.end();
    }
    else if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(`<h1>currency data<h1>`);
        res.end();
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });

        res.end();
    }




});

server.listen(8082, () => {
    console.log("Listening...")
})

/*

Imports:

http: The built-in Node.js module for creating HTTP servers.
querystring: A module to parse and stringify query strings (not used in the provided code).
currencies.json: A local JSON file that contains currency data, which is imported and stored in the data variable.
Server Creation:

The server is created using http.createServer, which takes a callback function. This function is executed each time an HTTP request is made to the server.
Request Handling:

The server logs "hello from server 2" each time a request is received.
The server responds differently based on the URL of the request (req.url):
/currencies: Responds with the currency data in JSON format.
/: Responds with a simple HTML message saying "currency data".
Any other URL: Responds with a 404 status and no content.
Response Content Types:

For the /currencies route, the response content type is set to application/json because the server sends JSON data.
For the / route, the response content type is set to text/html because the server sends an HTML string.
For other routes, a 404 status is sent with application/json content type, but no data is included in the response body.
Server Listening:

The server listens on port 8082, and a console message "Listening..." is logged to indicate that the server is running and ready to accept requests.
*/