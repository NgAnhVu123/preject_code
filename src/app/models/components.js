const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const component = new Schema({
    name: {type: String, require: true, unique: true},
    img: String,
    type: String,
    price:String,
    slug: String,
    exist:Boolean,
  
  },);
component.index({name: 'text'});
module.exports = mongoose.model('component',component);