import create from './models.js'
import mongoose from 'mongoose';

export const createData = async (req,res)=>{
    const data = {firstName:'QWEr',lastName:'gfhf',gender:'M',orgId:'gfh3454'}
    const newOrg = new create(data)
    try{
        await newOrg.save()
        console.log("Saved")
    }catch(err){
        console.log(err)
    }
}