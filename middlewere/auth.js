const jwt = require("jsonewebtoken");
const { validateToken } = require('./jwt')

const authJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split("")[1];
        jwt.verify(token, process.env.SECRET_JWT, (err, verifyToken) => {
            if (err) {
                return res.sendstatus(403);
            }
            req._id = validateToken._id;
            next();
        });
    } else {
        res.sendstatus(401);
    }
};
module.exports = { authJWT }
"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlmMzBmODA1NjA1OWIwODZlMmM1NjQiLCJpYXQiOjE2NTY5NDUxNDAsImV4cCI6MTY1Njk0NTc0MH0.7lZKZG0Uha6og9tXh2XJGXZIqhiGPBkmL0SW1I6ynvw"