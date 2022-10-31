const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const server = express()
const cors=require("cors")
server.use(cors());
server.use(express.json())
require("./userSchema")
const jwtObj = require("jsonwebtoken");
const Jwt_secret_Obj = "sfhgfhgefugefyfeyf63r36737288gssfgusducb@#$&fvdhfdgfuf76";
const User = mongoose.model("UserInfo")
const mongoUrl = "mongodb+srv://deaSquad:ghe627@cluster0.j81hdu6.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser:true
})
.then(()=>{console.log("Connnected to database");
})
.catch(e=>console.log(e));

server.post("/register", async(req, res)=>{
    const {fname, lname, email, password} = req.body;

    const encryptedPass = await bcrypt.hash(password, 10);

    try{
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.send({error: "The email used already exists"})
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPass
        });
        res.send({status:"ok"})
    } catch(error){
        res.send({status: "error"});
    }
});


server.post("/login", async(req,res)=> {
    const {email, password} = req.body;

    const user=await User.findOne({email});

    if(!user){
        return res.json({error: "User not found. That email does not exist "});
    }

    if(await bcrypt.compare(password, user.password)){
        const tempToken = jwtObj.sign({email:user.email}, Jwt_secret_Obj);

        if(res.status(201)){
            return res.json({status:"ok", data: tempToken});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error", error:"Invalid password"})
    
})


server.post("/userInfo", async(req,res)=>{
    const {token} = req.body;
    console.log("hello")
    try{
        const user = jwtObj.verify(token, Jwt_secret_Obj);

        console.log(user)

        const uEmail = user.email;
        User.findOne({email: uEmail}).then((data)=>{
            res.send({status:"ok", data: data});
        })
        .catch((error)=>{
            res.send({status: "error", data:error});
        });
    } catch(error){

    }
})


server.listen(5000, ()=>{
    console.log("Server started on port 5000");
})