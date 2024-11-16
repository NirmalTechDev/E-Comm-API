var mongoos = require('mongoose');

const adminscchema = new mongoos.Schema({
    email:{
        type:String,
    },
    password:{
        type:String
        
    },
})
module.exports = mongoos.model('admin',adminscchema)