const express =require('express')
const { sign, verify } = require('jsonwebtoken');
const {add,get}=require('../data/user')

const router=express.Router();

function createJSONToken(email) {
    return sign({ email }, KEY, { expiresIn: '1h' });
  }
  

router.post('/signup',async (req,res,next) => {
    const data=req.body;
    try {
        const createdUser=await add(data);
        const authToken=createJSONToken(createdUser.email);
        res.status(201).json({message:"User created",user:createdUser,token:authToken})
    } catch (error) {
    next(error)
    }
})
router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    let user;
    try {
      user = await get(email);
    } catch (error) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }
  
    const token = createJSONToken(email);
    res.json({ token });
  });
  
  module.exports = router;