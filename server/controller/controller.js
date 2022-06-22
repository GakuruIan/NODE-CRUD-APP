const userdb=require('../model/model');

exports.create=(req,res)=>{
  if(!req.body){
      res.status(400).send({message:"Field cannot be empty"});
      return;
  }

  const user=new userdb({
      name:req.body.name,
      email:req.body.email,
      gender:req.body.gender,
      status:req.body.status
  })
   user.save(user)
   .then(data=>
    //res.send(data)
    res.redirect('/addUser')
    )
   .catch(err=>{
       res.status(500).send({
           message:err.message || "some error occured while creating a message"
       })
   })
}

//retrieve users from database
exports.find=(req,res)=>{
    if(req.query.id){
        const id=req.query.id;
     userdb.findById(id)
     .then(data=>{
         if(!data){
             res.status(404).send({message:"User not found"})
         }else{
             res.send(data)
         }
     })
     .catch(err=>{
         res.status(500).send({message:"An error occured when fetching user"})
     })
    }else{
        userdb.find()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({message:err.message||"error occured while retrieving data"})
        })
    }
}

//updating user details
exports.update=(req,res)=>{
   if(!req.body){
       res.status(400).send({message:"Field Cannot be empty"})
   }
   const id=req.params.id;
   userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
   .then(data=>{
       if(!data){
           res.status(404).send({message:"User not found"});
       }else{
           res.send(data);
       }
   }).catch(err=>{
       res.status(500).send({message:"Error in updating"})
   })
}

//deleting user from database
exports.delete=(req,res)=>{
const id=req.params.id;
userdb.findByIdAndDelete(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:"User could not be found"})
    }else{
        res.send({message:"User deleted successfully "})
    }
}).catch(err=>{
    res.status(500).send({message:"An Error occured while deleting user"})
})
}
