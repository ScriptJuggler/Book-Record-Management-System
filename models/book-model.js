const mongoose = require("mongoose");

const Schema = mongoose.Schema; //representation of a table

//inheriting properties/functionalities from schema
const bookSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
},{
    timestamps: true,            //when that data was created or updated in order to keep track of it 
}) 

module.exports = mongoose.model("Book",bookSchema);