const User=require('../models/User.js');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');

const addUSer=async(req,res)=>{
    const { name, email, password, isAdmin } = req.body;
    try{

        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(password,saltRounds);

        const user=new User({
            name,
            email,
            password: hashedPassword,
            isAdmin
        });
        await user.save();

       

        res.status(201).json({user});
        console.log("User created:", user);

    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};

const login=async(req,res)=>{
    console.log("Incoming request body:", req.body);
    const {email , password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({error:"User not found"});
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid) return res.status(400).json({error:"Invalid password"});
        
        const isAdmin=user.isAdmin;
        const token=jwt.sign({userId: user._id,isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn:'1h'}
        );

        res.status(200).json({user,token});
        console.log("User found:", user);
        console.log("Token:", token);
  
    }catch(error){
        res.status(400).json({error:error.message});
    }
};


const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

module.exports={
    addUSer,
    getUsers,
    login
}