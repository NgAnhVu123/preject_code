const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    name_author: String,
    email: String,
    content:String,
    product_slug: String,
  },);

module.exports = mongoose.model('comment',comment);