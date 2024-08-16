const mongoose = require("mongoose");

const Schema = mongoose.Schema; //representation of a table

//inheriting properties/functionalities from schema
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    issuedBook:{
        type: mongoose.Schema.Types.ObjectId,  //Foreign  Key
        ref: "Book",
        required: false
    },
    returnDate:{
        type: String,
        required: false
    },
    subscriptionType:{
        type: String,
        required: true
    },
    subscriptionDate:{
        type: String,
        required: true
    },
},{
    timestamps: true,            //when that data was created or updated in order to keep track of it 
}) 

module.exports = mongoose.model("User",userSchema);