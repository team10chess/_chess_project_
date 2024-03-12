// import create from './models.js'
// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const Create = require('./models.js')
const createData=(data) => async (req,res)=>{
    console.log('fhjgfghfdhy')
    // const data = {firstName:'QWEr',lastName:'gfhf',orgId:'gfh3454'}
    console.log(data)
    console.log('fhjgfdhy')
    const newOrg = new Create(data)
    try{
        await newOrg.save()
        console.log("Saved")
    }catch(err){
        console.log(err)
    }
}
module.exports=createData;