// Routes for auth class goes here

//---------------------------------------------MODULES---------------------------------------------
const express = require('express');
const Auth = require("./../controller/auth");

//---------------------------------------------INSTANCE---------------------------------------------
let authRouter = new express.Router();
let auth = new Auth();

authRouter.put('/mailoptions/mailVerification/:id/:token',auth.emailVerification);                               //verify email & activate User Acc.
authRouter.post('/login',auth.userLogin);                                                                       //Get User
authRouter.put('/mailoptions/forgotpassword',async(req,res) =>{auth.forgotPassword(req,res)});                //generate password reset link
authRouter.put('/mailoptions/resetpassword/:id/:token',async(req,res) =>{auth.resetPassword(req,res)});      //verify email & reset password



module.exports = authRouter;