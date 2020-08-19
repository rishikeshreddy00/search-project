const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex : true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log("database connected")
    }
    catch(e){
        console.log(e)
        process.exit(1)
    }
    
}

module.exports = connectDB