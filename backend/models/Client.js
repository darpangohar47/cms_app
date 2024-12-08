const mongoose = require("mongoose");
const { Schema } = mongoose;

const ClientSchema = new Schema(
  {
    
    name: { type: String, maxLength: 128, required: true },
   
    description: { type: String, required: true },
    image: { type: String },
    designation: { type: String },

    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  },
  
);
mongoose.models = {};
module.exports = mongoose.model("Client", ClientSchema);