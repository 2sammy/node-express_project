//to be downloaded
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels")
// @desc Get all contacts
// @route Get /api/contacts
//@access pulic

const getContacts = asyncHandler( async(req,res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);


});

// @desc create new contacts
// @route post /api/contacts
//@access pulic
const createContact = asyncHandler( async(req,res) => {
    console.log("The request body is :", req.body)
    const {
        name,email, phone} =req.body;
        if(!name || !email || !phone) {
            response.status(400);
            throw new Error("All fields are mandatory!");
        }
        const contact = await Contact.create({
            
            name,
            email,
            phone,
            user_id: req.user.id
        });
    res.status(201).json(contact);

});

// @desc delete all contacts
// @route delete /api/contacts/id
//@access pulic
const deleteContact = asyncHandler( async(req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Errow("Contact not found");
    }

    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Errow("User dont have permission to update other user contacts");
    }
        await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);


});

// @desc PUT all contacts
// @route Get /api/contacts/:id
//@access pulic
const updateContact =asyncHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("Contact not updated")
    }
    if(contact.user_id.toString()!== req.user.id){
        res.status(403);
        throw new Errow("User dont have permission to update other user contacts");
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    );
    res.status(200).json(updatedContact);

});

// @desc Get all contacts
// @route Get /api/contacts/:id
//@access pulic
const getContact = asyncHandler (async(req,res) => {
   const contact = await Contact.findById(req.params.id);
   if(!contact) {
    res.status(400);
    throw new Error("Contact not found");
   }
    res.status(200).json(contact);

});
moddule.exports = {    getContact,
                    createContact,
                    updateContact,
                    getContacts,
                    deleteContact};