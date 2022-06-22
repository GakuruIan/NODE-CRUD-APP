const express=require("express")
const route=express.Router();
const controller=require('../controller/controller');

const services=require("../services/render");

/**
 * @ description root route
 * @ method GET
 */
route.get("/",services.homeRoute);

/**
 * @ description addUser route
 * @ method GET
 */
 route.get("/addUser",services.addUser);

 /**
 * @ description update route
 * @ method GET
 */
route.get("/update",services.updateUser);

//API
route.post("/api/user",controller.create);

route.get("/api/user",controller.find);

route.put("/api/user/:id",controller.update);

route.delete("/api/user/:id",controller.delete);

module.exports=route;