import {createData} from './addData.js';
import mongoose from 'mongoose';
// const mongoose = require('mongoose');

// const PORT = process.env.PORT || 5000

const DATABASE_URL = 'mongodb+srv://ChessProject:Team10%40123@cluster0.lffck.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(DATABASE_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> {
        console.log("Listening...")
        createData();
    })
    .catch((err)=>console.log(err.messages))


