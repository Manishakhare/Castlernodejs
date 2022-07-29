// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const validator = require("validator");
const Admin_model = new mongoose.Schema({

    name: {
        type: String,
   
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      email: {
        type: String,
      
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      description: {
        type: String,
    
        maxLength: [150, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"],
      },
      Date:
      {
         type: Date,
        default: Date.now,

      },
      mobile: {
        type: Number,
 
    
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
 
 
 
  
 
  
});


const admin_info= mongoose.model('Employee', Admin_model);
module.exports = admin_info ;