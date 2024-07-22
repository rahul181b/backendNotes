
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