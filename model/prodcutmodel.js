var mongoose = require('mongoose')

var productschema = new mongoose.Schema({
    name:{type:String},
    price:{type:String},
    discountpercentage:{type:String},
    stock:{type:String},
    rating:{type:String},
    brand:{type:String},
    category:{type:String},
    description:{type:String},
    thumbnail:{type:String},
    images:{type:Array}
})
module.exports = mongoose.model('product-data',productschema);
