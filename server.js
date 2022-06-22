const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const connectDB=require('./server/database/connection');


dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;
//log request
app.use(morgan("tiny"));

//DB connection
connectDB();

//view engine
app.set("view engine", "ejs");
 
//parse to express body-parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/bootcss", express.static(path.resolve(__dirname, "assets/Bootstrap/css")));
app.use("/bootjs", express.static(path.resolve(__dirname, "assets/Bootstrap/js")));
app.use("/jquery",express.static(path.resolve(__dirname,"assets/Jquery")));
 
app.use("/",require("./server/routes/router"));


app.listen(PORT, () => { 
  console.log(`server started on http://localhost:${PORT}`);
});
 