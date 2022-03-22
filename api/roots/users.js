const router = require("express").Router();
const User = require("/Users/srivemugunta/Desktop/blog/api/models/Users.js");
const Post = require("/Users/srivemugunta/Desktop/blog/api/models/Post.js")
const bcrypt = require('bcrypt');
//update
router.put("/:id",async(req, res)=>{
    if(req.body.userId === req.params.id){
if(req.body.password){
    const hash1 = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, hash1);
}
try{
   const updatedUser = await User.findByIdAndUpdate(req.params.id,{
       $set:req.body,
   },{new:true});
   res.status(200).json(updatedUser);
}
catch(err)
{
    res.status(500).json(err);
}
}
else{
    res.status(401).json("You can update only your account!")
}
});
//delete
router.delete("/:id",async(req, res)=>{
    if(req.body.userId === req.params.id){
        try{
const user = await User.findById(req.params.id);
if(user)
{
try{
    await Post.deleteMany({username: user.username});
await User.findByIdAndDelete(req.params.id);
   res.status(200).json("User has been deleted");
}
catch(err)
{
    res.status(500).json(err);
}
}
else{
    throw Error ('No User');
}  }
catch(err){
res.status(404).json("No User");
 }
}
else{
    res.status(401).json("You can update only your account!")
}
});
//get
router.get("/:id", async (req,res)=>{
 try{
const user = await User.findById(req.params.id);
const {password, ...others } = user._doc;
res.status(200).json(others);
 }
 catch(err){
res.status(500).json("No User");
 }
});
module.exports = router;