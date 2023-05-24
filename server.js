const express=require("express");
const app = express();
app.get("/",function(req,res){
   console.log(req);
   res.send("heyyyy");
});
app.get("/contact",function(req,res){
    res.send("contact me at adarsh@theartspace.co.in");
});
app.get("/about",function(req,res){
    res.send("I am soon to be the web developer");
});
app.listen(3000 , function(){
    console.log("Server of Local Host 3000 started");
});