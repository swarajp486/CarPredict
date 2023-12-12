
const express =require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
app.use(express.json())
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const JWT_SECRET="sakdffjewofjwe"
const port=process.env.PORT ||6000

const MONGODB="mongodb+srv://swarajp486:Lecun@cluster0.c4lhbbx.mongodb.net/"

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection successful");
    
  })
  .catch((e)=>console.log(e));


app.listen(port,()=>{
    console.log(`Server started at http://localhost:${port}`)
})

app.post("/post",async (req,res) =>{
    console.log(req)

})

const User=require('./userDetails')

app.post("/register",async(req,res)=>{
    const {firstName,lastName,email,password,userType}=req.body

    const encryptedPassword= await bcrypt.hash(password,10)
    try {
        const oldUser=await User.findOne({email})
        if(oldUser){
           return res.send({error:"User Exists"})
        }
        await User.create({
            firstName,
            lastName,
            email,
            password:encryptedPassword,
            userType,

        })
        res.send({status:"ok"})
    } catch(error){
        res.send({status:"error"})
    }
})

app.post("/loginuser", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email:email });
    if (!user) {
      return res.json({ error: "User dosent exist with that email" });
    }
    const doMatch=await bcrypt.compare(password, user.password)
    if (!doMatch) {
      return res.json({ error: "email or password invalid" });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token ,userType:user.userType});
    } else {
      return res.json({ error: "error" });
    }
   
  });
  
  app.post("/admin",async(req,res)=>{
    try {
        const user=await User.find({})
        res.send({status:'ok',userdetail:user})
    } catch(error){
        res.send({status:"error"})
    }
})


app.post("/delete", async (req, res) => {
  const {_id} = req.body;

  const wasdeleted = await User.deleteOne({ _id:_id });
 

  if (wasdeleted) {
    return res.json({ status: "ok"});
  } else {
    return res.json({ error: "error" });
  }
 
});

