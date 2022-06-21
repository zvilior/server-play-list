const jwt = require("jsonwebtoken");
const secret = "1234"
function createToken(id) {
    const token = jwt.sign({ id }, secret, { expiresIn: "1h" })
    return token
}


function validateToken(token) {
    return jwt.verify(token, secret)
}

module.exports = { createToken, validateToken };