const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./../.env.local" });
const Subscription = require('./../models/Subscription')

//creating a Subscription
router.post(
  "/", 
  async (req, res) => {
    
   
    try {
      let subscription = req.body.subscription;
      await Subscription.create(subscription)
      res.status(201).json({ message: "Subscription created successfully" });
     
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
      const subscriptions = await Subscription.find()
      res.status(201).json({ subscriptions: subscriptions});
     
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);



module.exports = router;