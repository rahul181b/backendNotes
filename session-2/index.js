// using express 
//
// 1.Create an app instance
import { getCurrencies } from "./controllers/currencies.controllers";
const currencies = require("./currencies.json");
const data = currencies.data;

const express = require("express");

const app = express();

const PORT = 8082;

// 3.Adding a route
// app.get("/currencies", (req, res) => {
//     console.log("current route /")
//     // 4.We can work normally with res object like we did with HTTP file. 
//     // res.write(`<h1>hello<h1>`);

//     // 5. or with express installed we can write 
//     // res.send(`<h1>hello<h1>`); // for sending data back
//     // or 
//     // res.json({ serverStatus: "active" }); //to send JSON 
//     res.json(data);
//     res.end();
// })
app.get("/currencies/:symbol", (req, res) => {
    //the url should be http://localhost:8082/currencies/usd
    const symbol = req.params.symbol;

    console.log(symbol);
    const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
    if (result) {
        res.status(200).json(result);
    } else {
        res.sendStatus(404);
    }

});
//using query parameters
app.get("/currencies", getCurrencies);

app.get("/", (req, res) => {
    res.send(`<h1>currencies data<h1>`);
    res.end();
})


// 2.Listening to port using listen
app.listen(PORT, () => {
    console.log("Listening to ", PORT);
})