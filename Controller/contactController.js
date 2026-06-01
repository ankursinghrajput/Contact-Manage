const express = require("express");
const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");
const userModel = require("../model/userModel");

//@access private
const getContacts = asyncHandler (async (req, res)=>{
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

//@access private
const postContacts = asyncHandler (async (req, res) =>{
    console.log("The body data is", req.body);
    const {name,phone,email} = req.body;
    if(!name ||!email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory!");
    }
    const contact = await Contact.create(
        {name,email,phone,user_id:req.user.id}
    );
    res.status(201).json(contact);
});

//@access private
const getContact = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found!");
    }
    res.status(201).json(contact);
});

//@access private
const putContacts = asyncHandler (async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found!");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to update the contact!")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.status(201).json(updatedContact);
});

//@access private
const deleteContacts = asyncHandler (async (req,res)=>{
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact Not Found!");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete the contact!");
    }
    res.json(contact);
});

module.exports = {getContacts,postContacts,getContact,putContacts,deleteContacts};