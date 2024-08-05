const express = require("express")

const app = express();

const currencyRoute = require("./routers/currencies.routes");
const userRoute = require("./routers/users.routes")

// step 2 -- create router




const PORT = 8082;

app.use("/currencies", currencyRoute);
app.use("/users", userRoute);


app.get("/", (req, res) => {
    res.send(`<h1>currencies data<h1>`);
    res.end();
})

// 1.Move the routes to router file



app.listen(PORT, () => {
    console.log("Listening to ", PORT);
})