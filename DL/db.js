//מטרת הקובץ התחברות לשרת מקומי או מרוחק

const mongoose = require('mongoose') //יבוא
const MONGO_URL = 'mongodb+srv://zvilior:zml943MDB@cluster0.fedki.mongodb.net/test1?retryWrites=true&w=majority'


exports.connect = async () => {
    try {
        await mongoose.connect(MONGO_URL, { useNewUrlParser: true },
            (err) => {
                if (err) { throw err }

                console.log('conection success, state:', mongoose.connection.readyState);

            })
    }
    catch (err) {
        console.log('error!', err)

    }

}

