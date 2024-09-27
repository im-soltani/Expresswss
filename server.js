const express=require("express")
const Datee=require("./middleweare/Date")
const app=express()
app.use(express.json())
const port=5000
app.use(Datee)
//routes
// console.log(__dirname,"hello")
//     app.get("/aboutus",(req,res)=>{
//         res.sendFile(__dirname + "/public/aboutUs.html")
//     })
// app.get("/contactus",(req,res)=>{
//     res.sendFile(__dirname+"/public/contact.html")
// })

app.use("/api/users",require("./routes/userRoute"))

app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
})