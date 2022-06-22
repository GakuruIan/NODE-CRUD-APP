const axios=require('axios');
const { response } = require('express');

exports.homeRoute=(req,res)=>{
    axios.get('http://localhost:5000/api/user')
    .then(response=>{
    console.log(response)
    res.render("index",{users:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.updateUser=(req,res)=>{
    axios.get('http://localhost:5000/api/user',{params:{id:req.query.id}})
    .then(function(userData){
      res.render("update",{user:userData.data});
    })
    .catch(err=>res.send(err));
}
exports.addUser=(req,res)=>{
    res.render("addUsers");
}