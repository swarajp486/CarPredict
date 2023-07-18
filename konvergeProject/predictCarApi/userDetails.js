const {model,Schema}=require('mongoose')

const userDetailsScehma=new Schema({

    firstName:String,
    lastName:String,
    email:{type:String, unique:true},
    password:String,
    userType:String,
    
})

module.exports=model('userInfo',userDetailsScehma)