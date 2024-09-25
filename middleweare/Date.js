const Datee=(req,res,next)=>{
    const date = new Date();
    const h = date.getHours();
const d = date.getDay();
if(!(d<=5  && h>=9 && h <=15)){
    return res.send("hors service")
}
next()
}
module.exports=Datee