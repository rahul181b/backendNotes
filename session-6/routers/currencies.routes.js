const { getCurrencies, getCurrencyWithSymbol } = require("../controllers/currencies.controllers");


const router = require("express").Router();

router.get("/:symbol", getCurrencyWithSymbol);
router.get("/", getCurrencies);

module.exports = router;