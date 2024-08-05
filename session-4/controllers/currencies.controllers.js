const currencies = require("../currencies.json");
const data = currencies.data;





const getCurrencies = (req, res) => {


    console.log(req.query);
    const { min_value } = req.query;
    if (min_value) {
        const result = data.filter((item) => Number(item.min_size) === Number(min_value))
        //https://www.w3schools.com/jsref/jsref_number.asp
        res.json(result)
    }
    else {
        res.json(data);
    }

    // res.end();
}

const getCurrencyWithSymbol = (req, res) => {
    //the url should be http://localhost:8082/currencies/usd
    const symbol = req.params.symbol;

    console.log(symbol);
    const result = data.find((item) => item.id.toLowerCase() === symbol.toLowerCase());
    if (result) {
        res.status(200).json(result);
    } else {
        res.sendStatus(404);
    }

}

module.exports = {
    getCurrencies,
    getCurrencyWithSymbol
}


/*
    Module Scope -> Each file in JS can be treated as a self contained module which can 
import elements from other modules and export elements out of it.
    Any element defined in a file is not available in the other modules by 
default unless it is exported and imported correctly.
*/
