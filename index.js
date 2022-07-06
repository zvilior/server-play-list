require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


const router = require('./Routes')


app.use(express.json())
app.use(require('cors')())
app.get("/", (req, res) => { res.send("hello baruch!"); })

app.use("/api", router)




app.listen(port, () => console.log(`server is running => ${port}`))
require('./DL/db').connect();


//GET - www.loc.com


//GET - לבקש www.loc.com/api/users

//POST  - ליצור www.loc.com/api/users
//body {name:"moshe", age:29}

//PUT - לעדכן www.loc.com/api/users/1
//body {name:"moshe", age:30}

//DELETE - למחוק


