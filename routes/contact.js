const express=require('express')
const router=express.Router()
const Contact=require("../models/Contact")

// router.get('/test',(req,res)=>{
//     res.send('this is test')
// })
router.post("/",async(req,res)=>{
    try {
        const {name, email, phone}=req.body
        if (!name||!email){
            return res.status(400).send("name and email are required")
        }
        const contactt = await Contact.findOne({email})
        if (contactt) {
            return res.status(400).send("contact already exists")
        }
        const contact=new Contact({name,email,phone})
        await contact.save()
        res.status(200).send({msg:"contact added", contact})
        
        
    } catch (error) {
        res.status(500).send("impossible to add contact")
        
    }
})
router.get("/",async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({msg:"all contacts", contacts})
    } catch (error) {
        res.status(500).send("impossible to get contacts")
        
    }
})
router.put("/:Id",async(req,res)=>{
    try {
        const {Id}=req.params
        const newContact= await Contact.findOneAndUpdate({_id:Id},{$set:{...req.body}})
        res.status(200).send({msg:"contact edited",newContact})
    } catch (error) {
        res.status(500).send("impossible to edit")
        
    }
})
router.delete("/:Id",async(req,res)=>{
    try {
        const {Id}=req.params
        await Contact.findOneAndDelete({_id:Id})
        res.status(200).send("contact deleted")
    } catch (error) {
        res.status(500).send("impossible to delete")
    }
})
module.exports=router