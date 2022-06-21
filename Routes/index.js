// module.exports = (req, res) => {
//     res.send("amos hagever")
// }

const express = require('express')
const router = express.Router()

const usersRouter = require('./userRoute')
// const itemsRouter = require('./itemRoute')
// const ordersRouter = require('./orderRoute')


router.use("/users", usersRouter);
// router.use("/items", itemsRouter);
// router.use("/orders", ordersRouter);

module.exports = router;