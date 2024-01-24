const mongoose = require('mongoose')
const validator = require('validator')



const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please enter your name"],
        maxLength:[30, "Name cannot exceed 30 charecters"],
        minLenght: [4,"Name should have more than 4 charecters"],
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate:[validator.isEmail, "Please enter a valid email"],
    },
    password:{
        type: String,
        required: [true, "Please enter a apassword"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const User = mongoose.model("User",userSchema)
module.exports = User ;