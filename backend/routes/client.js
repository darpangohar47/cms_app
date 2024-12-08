const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./../.env.local" });
const Client = require('./../models/Client')

//creating a Client
router.post(
  "/", 
  async (req, res) => {
    
   
    try {
      let client = req.body.client;
      await Client.create(client)
      res.status(201).json({ message: "Client created successfully" });
     
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
      const clients = await Client.find()
      res.status(201).json({ clients: clients});
     
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);


module.exports = router;