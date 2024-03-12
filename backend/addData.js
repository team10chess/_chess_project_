// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const create = require('./models.js')
const createData = async (req,res)=>{
    const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    const newOrg = new create(data)
    try{
        await newOrg.save()
        console.log("Saved")
    }catch(err){
        console.log(err)
    }
}
module.exports=createData;