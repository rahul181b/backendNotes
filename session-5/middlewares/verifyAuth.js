require("dotenv").config();
const PASSWORD = process.env.ROUTE_PASSWORD;

//to verify the authorization --use postman to put password in header 
const verifyAuth = (req, res, next) => {
    console.log("verify auth function")
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(403).json({ message: "unauthorized request" });
    }


    if (authorization !== PASSWORD) {
        return res.status(403).json({ message: "Unauthorized Request" });
    }

    next();
};

module.exports = { verifyAuth };