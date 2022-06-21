
const userController = require('../DL/controllers/userController')

const {crateToken, createToken}= require ("./jwt");

exports.getAllUsers = async() => {
    const users = await userController.read({});
    if(users.length===0) throw ({code:400, message:"there is no users"})

      userController.read({})
}
exports.getUserDetailsById = (id) => {
      userController.read({_id:id})
}

exports.createUser = (userFields) => {
    if(userFields.length===0) throw ({code:400, message:"there is no user fields"})
      userController.create(userFields)
}

exports.updateUser = (filter,newData) => {
    if(!newData)    throw ({code:400, message:"there is no new data"})
      userController.update(filter,newData);
}

exports.register = async(userFields) => {
    if(userFields.length) throw ({code:400, message:"this email is already in use"})
      userController.create(userFields)
}

exports.login = async (email,password) => {
    
    if(!email || !password) throw ({code:403, message:"missing data"})
    const eUser = await userController.readOne({email} , "+password");
if(!eUser) throw ({code:404, message:"user not found"})
if (password !== eUser.password) throw ({code:503, message:"password mismatch"})
return  createToken(eUser._id);
}



















// }

// async function register() {
    //     // many many many validations
    
    // }
    
    // async function getUserDetailsById(id) {
        
        //     await userController.create({ email: "Yon@walla.com" })
        
        // find
        // check if null or exist
        //   error / user {}
// let user1 = {
//     firstName: "Yonatan",
//     lastName: "Ramon",
//     email: "Yokon@walla.com",
//     password: "987865",
//     address: {
//         street: 12,
//         homeNum: 34,
//         city: "jerusalem",
//     },
//     gender: 'male'
// }

// create(user1)
