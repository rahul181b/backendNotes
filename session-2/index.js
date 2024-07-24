// using express 
//
// 1.Create an app instance

const currencies = require("./currencies.json");
const data = currencies.data;

const express = require("express");

const app = express();

const PORT = 8082;

// 3.Adding a route
app.get("/currencies", (req, res) => {
    console.log("current route /")
    // 4.We can work normally with res object like we did with HTTP file. 
    // res.write(`<h1>hello<h1>`);

    // 5. or with express installed we can write 
    // res.send(`<h1>hello<h1>`); // for sending data back
    // or 
    // res.json({ serverStatus: "active" }); //to send JSON 
    res.json(data);
    res.end();
})

app.get("/", (req, res) => {
    res.send(`<h1>currencies data<h1>`);
    res.end();
})


// 2.Listening to port using listen
app.listen(PORT, () => {
    console.log("Listening to ", PORT);
})