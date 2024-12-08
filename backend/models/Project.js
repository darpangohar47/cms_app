const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    
    name: { type: String, maxLength: 128, required: true },
   
    description: { type: String, required: true },
    image: { type: String },

    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  },
  
);
mongoose.models = {};
module.exports = mongoose.model("Project", projectSchema);