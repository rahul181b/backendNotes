const express = require("express")

const app = express();
const mongoose = require("mongoose")
const { verifyAuth } = require("./middlewares/verifyAuth")
const currencyRoute = require("./routers/currencies.routes");
const userRoute = require("./routers/users.routes")

// step 2 -- create router




const PORT = 8082;


const DB_URI = "mongodb://127.0.0.1:27017/website";
mongoose
    .connect(`${DB_URI}`)
    .then(() => console.log("Connected to DB at", DB_URI))
    .catch((e) => console.log("Failed to connect to DB", e));


app.use(verifyAuth);
app.use("/users", userRoute);
app.use("/currencies", currencyRoute);



app.get("/", (req, res) => {
    res.send(`<h1>currencies data<h1>`);
    res.end();
})

// 1.Move the routes to router file



app.listen(PORT, () => {
    console.log("Listening to ", PORT);
})