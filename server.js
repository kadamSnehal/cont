var express=require('express')
var app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome !!!!</h1>"
    +"<hr/>"
    +"<h3>Flowers</h3>"
    +"<br/>"
    +"<ol>"
    +"<h4>"
    +"<li>Rose</li>"
    +"<li>Lotus</li>"
    +"<li>Champa</li>"
    +"<li>Chameli</li></h4>"
    +"</ol>")
});
app.get("/aboutus",(req,res)=>{
    res.send("<h1>Nothing to display !!</h1>")
});

var server=app.listen(9000);
console.log("server started at port no 9000");