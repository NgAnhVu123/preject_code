const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bill = new Schema({
    name: String,
    sdt: String,
    adress:String,
    email: String,
    idproduct: String,
  },{
      timestamps: true,
  });

module.exports = mongoose.model('bill',bill);