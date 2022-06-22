const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGOURI)
        console.log(`connection to database successfull! HOST ${con.connection.host}`);
    }
    catch(err){
    console.log(err);
    process.exit(1);
    }
}
module.exports=connectDB;