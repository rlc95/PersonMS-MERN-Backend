const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');
const router = require('./route');

app.use(cors());
app.use(express.json());

const url = 'mongodb+srv://rlcit1995:rlc95@cluster0.hdrbpf4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connect to Mongoose');
        
        
    } catch (error) {
        console.log('Error occurs', error);
        
    }
}

connect();

const server= app.listen(port,host, ()=>{
    console.log(`Node server is listening ${server.address().port}`);
})

app.use('/api',router);
