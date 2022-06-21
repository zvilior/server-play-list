const { validateToken } = require('../BL/jwt')
const { readOne } = require('../DL/controllers/userController')

async function auth(req, res, next) {
    try {
        console.log("test");
        const token = req.headers.authorization


        const decode = validateToken(token)

        const eUser = await readOne({ _id: decode.id })
        if (!eUser) throw ''
        // if (!eUserion != "admin") throw ''

        next();

    } catch (err) {
        res.status(503).send({ message: 'not authorized' })
    }


}
module.exports = auth