const express=require("express")
let users=require("../Data")
const router=express.Router()


//get all users
router.get("/getall",(req,res)=>{
    res.send(users)
})
//add new user
router.post("/addUser",(req,res)=>{
    const newUser={
        ...req.body,id:Math.random()
    }

    users.push(newUser)
    res.send({msg:"user added",users})

})

// edit user
router.put("/edit/:index",(req,res)=>{
    const ind=req.params.index
    const userToEdit=users.find((user)=>user.id==ind)
if(!userToEdit){
   return  res.send({msg:"user not exist"})
}
 let editedUser={...userToEdit,...req.body} 
 users=users.map((el)=>el.id==ind ?editedUser:el)
 res.send({msg:"user edited",users})
})

router.delete("/delete/:index",(req,res)=>{
    const id=req.params.index
    users=users.filter((el)=>el.id!=id)
    res.send({msg:"user deleted !",users})
})




module.exports=router