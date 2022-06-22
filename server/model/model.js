const mongoose=require('mongoose')

var schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
});

const user=mongoose.model('User',schema);

module.exports=user;