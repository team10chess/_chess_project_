import mongoose from "mongoose";

const Create = mongoose.Schema({
    firstName : {type: String, required:'Firstname is required'},
    lastName : {type: String, required:'Lastname is required'},
    gender : {type:String, required:"Gender must be metioned"},
    orgId : {type: String, required:'ID is required'},
})

export default mongoose.model('create', Create)