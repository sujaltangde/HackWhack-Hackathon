const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    certificate:{
        type: String,
        required:[true, 'File Name must required'],
    },
    fileUpload:{
        type: String,
        required: [true, "Please enter your name"],
    },
   
})


const File = mongoose.model("fileHack",fileSchema)
module.exports = File;