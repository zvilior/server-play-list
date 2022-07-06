const userController = require('../DL/controllers/userController')
const jwtFn = require('../middleware/jwt')


async function login(loginData){
  const password = loginData.password;
  const email = loginData.email;
  const user = await userController.readOne({email: email}, "+ password")
if (!user) throw({code:401, message:"not exist"})
if (user.password !== password) throw({code:401, message:"unauthorized"})
const token = jwtFn.createToken(user._id)
return token
}


module.exports = {login}

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
    if(!userFields) throw ({code:400, message:"this email is already in use"})
      userController.create(userFields)
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
