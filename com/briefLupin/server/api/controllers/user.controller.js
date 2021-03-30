const jwt = require('jsonwebtoken');
const {loginValidation, registerValidation} =require('../validation/user.validation');
const logSchema = require('../models/Logger.model');
const log = require('../config/log');
const User = require('../models/User.model');


// LOGIN SUPER ADMIN 
const loginSuperAdmin = async (req, res)=>{
    const SuperAdmin = {
        full_name: "Benjamin Ferel",
        email: "B.ferel@lupin.co",
        phone: "0102030405",
        password: "0102030405",
    };
    if(SuperAdmin.email != req.body.email) return res.status(400).send('Address email is not found!');
    if(SuperAdmin.password != req.body.password) return res.status(401).send('Password incorrect!');
    

    const token = jwt.sign({email:SuperAdmin.email}, process.env.TOKEN_SECRET,{expiresIn:process.env.JWT_EXPIR});
    res.send({token, SuperAdmin});
    console.log(token);
};

// LOGIN ADMIN 
const login = async (req, res)=>{

    // VALIDATION LOGIN-ADMIN 
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // CHECK IF ADMIN ALREADY EXISTS 
    const admin = await User.findOne({phone:req.body.phone});
    if(!admin) return res.status(400).send('Phone Number is not found!!');
    // CHECK IF PASSWORD IS CORRECT
    const adminPass = await User.findOne({password:req.body.password});
    if(!adminPass) return res.status(400).send('Password incorrect!!');

    const token = jwt.sign({_id:admin._id}, process.env.TOKEN_SECRET,{expiresIn:process.env.JWT_EXPIR});
    res.send({token, admin});
};

// POST NEW DATA 
const register = async (req, res)=>{

    // VALIDATION REGISTER-ADMIN FIELDS
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    // CHECK IF NUMBER PHONE ALREADY EXISTS 
    const phoneExist = await User.findOne({phone:req.body.phone});
    if(phoneExist) return res.status(400).send('Phone Number already exists');
    // CHECK IF ADDRESS EMAIL ALREADY EXISTS 
    const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send('Address email already exists');


    const reqB = req.body;
    const newAdmin = new User({
        full_name   : reqB.full_name,
        email       : reqB.email,
        phone       : reqB.phone,
        password    : reqB.password,
        cin         : reqB.cin
    });

    try {
        const saveAdmin = await newAdmin.save();
        res.json(saveAdmin);
    } catch (error) {
        res.json({message:error})
    } 
};

// GET ADMINS 
const getAdmins = async (req,res)=>{
    try {
        const admins = await User.find();
        res.json(admins) 
    } catch (error) {
        res.json({message:error})
    }
};

// VALIDATE ADMIN
const getAdminById = async (req, res)=>{
    try {
        const admin = await User.findById({_id:req.params.id});
        res.status(200).json(admin);
    } catch (error) {
        res.json({message:error})
    }
}

// VALIDATE ADMIN
const validateAdmin = async (req, res)=>{
    try {
        const adminIsValid = await User.updateOne(
            {_id:req.params.id},
            {
                $set:{is_valid:true },
            }
        );
        res.status(200).json(adminIsValid);
    } catch (error) {
        res.json({message:error})
    }
}

// UPDATE DATA
const updateAdmin = async (req, res)=>{
    try {
        const adminUpd = await User.updateOne(
            {_id:req.params.id},
            {
                $set:{
                    full_name:req.body.full_name,
                    phone:req.body.phone,
                    email:req.body.email,
                    password:req.body.password
                },
            }
        );
        res.status(200).json(adminUpd);
    } catch (error) {
        res.json({message:error})
    }
}

// DELETE DATA 
const deleteAdmin = async (req, res)=>{
    try {
        const adminDel = await Admin.remove({_id:req.params.id});
        res.json(adminDel);
    } catch (err) {
        res.json({message:err});
    }
}

module.exports = {
    loginSuperAdmin,
    register,
    login,
    getAdmins,
    validateAdmin,
    getAdminById,
};