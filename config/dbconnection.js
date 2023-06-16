const mongoose = require("mongoose");

const dbconnection=async(DB_URL) => {
    try {

        const DB_OPTIONS = {
            dbname:"testapi"
        }
        await mongoose.connect(DB_URL, DB_OPTIONS);
        console.log("database connected successfully")

     }
    
    catch (error) {
        console.log(error)
    }
}

module.exports=dbconnection