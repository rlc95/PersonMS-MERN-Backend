const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const useSchema = new Schema({
    id:Number,
    name:String,
})

const User = mongoose.model('User',useSchema);

module.exports = User;