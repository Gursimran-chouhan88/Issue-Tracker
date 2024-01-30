// connected to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://gursimranjeet0786:8OVLi6fzpl2fluBR@cluster0.5pe6ulb.mongodb.net/Issue-Tracker`);


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;