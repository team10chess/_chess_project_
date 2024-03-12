// import mongoose from "mongoose";
const mongoose = require('mongoose');

const Create = mongoose.Schema({
    firstName : {type: String, required:'Firstname is required'},
    lastName : {type: String, required:'Lastname is required'},
    orgId : {type: String, required:'ID is required'},
})

mongoose.model('create', Create)
module.exports=Create