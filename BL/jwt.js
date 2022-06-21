const jwt = require("jsonwebtoken");
const secret = "1234"
function createToken(id) {
    const token = jwt.sign({ id }, secret, { expiresIn: "1h" })
    return token
}

// console.log(createToken("abcd"));

function validateToken(token) {
    return jwt.verify(token, secret)
}
// console.log(validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2QiLCJpYXQiOjE2NTU4MTU3ODMsImV4cCI6MTY1NTgxNTg0M30.4EmroPfkbC3Ono-b4uqn3GK8fL4hgt_QRPc0XRrw8gU"));

module.exports = { createToken, validateToken };