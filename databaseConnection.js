const mongoose = require("mongoose");
function DbConnection() {
    //to get database url
    const DB_URL = process.env.MONGO_URI;
    //provide certain permissions
    mongoose.connect(DB_URL, {      //connecting database
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    const db = mongoose.connection;

    //to check whether my database is working fine or throwing an error
    db.on("error", console.error.bind(console,"Connection Error"));
    db.once("open",function(){
        console.log("DB Connected !");
    })              
}

module.exports = DbConnection;