const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./../.env.local" });
const Contacts = require('./../models/Contacts')

//creating a Contacts
router.post(
  "/", 
  async (req, res) => {
    
   
    try {
      let contacts = req.body.contact;
      console.log(contacts)
      await Contacts.create(contacts)
      res.status(201).json({ message: "Contact created successfully" });
     
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);

router.get(
  "/", 
  async (req, res) => {
    
   
    try {
      const contacts = await Contacts.find()
      res.status(201).json({ contacts: contacts});
     
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);


module.exports = router;