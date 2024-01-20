const User = require("../model/user");
const Contact=require('../model/contact');
const { response } = require("express");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({},{password:0});
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
   return  res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById=async(req,res)=>
{
  try {
  
    const id=req.params.id;
    
    if(id){
    const userData=await User.findOne({_id:id},{password:0});
    return res.status(200).json(userData)
    }
  } catch (error) {
    console.log("in console del");
    return res.status(401).json({message:error})
  }
}
const updateUserById=async(req,res)=>
{
  try {
  
    const id=req.params.id;
    const updatedUserData=req.body;
   

    const updatedData=await User.updateOne({_id:id},{
      $set:updatedUserData
    })

    
    return res.status(200).json(updatedData)
  
  } catch (error) {
    console.log("in console del");
    return res.status(401).json({message:error})
  }
}

const deleteUserById =async(req,res)=>
{
try {
  
  const id=req.params.id;
  if(id){
  const DeletedUser=await User.deleteOne({_id:id});
  return res.status(200).json({message:"User Deleted Successfully"})
  }
} catch (error) {
  console.log("in console del");
  next(error);
}
}
const deleteContactById =async(req,res)=>
{
try {
  
  const id=req.params.id;
  if(id){
  const DeletedContact=await Contact.deleteOne({_id:id});
  return res.status(200).json({message:"Contact Deleted Successfully"})
  }
} catch (error) {
  console.log("in console del");
  next(error);
}
}
const getAllContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      if (!contacts || contacts.length === 0) {
        return res.status(404).json({ message: "contacts not found" });
      }
     return  res.status(200).json(contacts);
    } catch (error) {
      next(error);
    }
  };

module.exports={getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById};
