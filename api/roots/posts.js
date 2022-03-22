const router = require("express").Router();
const User = require("/Users/srivemugunta/Desktop/blog/api/models/Users.js");
const Post = require("/Users/srivemugunta/Desktop/blog/api/models/Post.js")
//Create
router.post("/",async(req, res)=>{
const newPost = new Post(req.body);
try{
const savedPost = await newPost.save();
res.status(200).json(savedPost);
}
catch(err)
{
    res.status(500).json(err);
}
});
//update
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
//delete

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