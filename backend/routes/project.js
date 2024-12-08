const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config({ path: "./../.env.local" });
const Project = require('./../models/Project')

//creating a project
router.post(
  "/", 
  async (req, res) => {
    
   
    try {
      let project = req.body.project;
      await Project.create(project)
      res.status(201).json({ message: "Project created successfully" });
     
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
      const projects = await Project.find()
      res.status(201).json({ projects: projects});
     
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error);
    }
  }
);



module.exports = router;