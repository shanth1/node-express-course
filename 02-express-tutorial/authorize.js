const authorize = (req, res, next) => {
    console.log("auth");
    const { name } = req.query;
    if (name === "Denis") {
        req.user = { name: "Denis" };
        return next();
    }
    return res.status(401).send("<h1>Authorization Required</h1>");
};

module.exports = authorize;
