const express=require("express")
const bodyparser=require("body-parser")
const app=express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine','ejs');
const day=new Date();
var today=day.toLocaleDateString("en-US",option)
var newlist=["Wake Up Early","Go To Gym","Cook Food"]
var option={
    day:"numeric",
    weekday:"long",
    month:"long"
}
var today=day.toLocaleDateString("en-US",option)
app.get("/",(req,res)=>{
    res.render("list",{presentday:today,newitems:newlist});
    
})
app.post("/",(req,res)=>{
    var item =req.body.itm
    newlist.push(item)
    res.redirect("/")
    
    
})

app.listen("3000",()=>{
    console.log("the port 3000 started perpectly")
})