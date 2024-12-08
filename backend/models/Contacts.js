const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactsSchema = new Schema(
  {
    
    fullname: { type: String, maxLength: 128, required: true },
   
    email: { type: String, required: true },
    city: { type: String },
    mobile: { type: String },

    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  },
  
);
mongoose.models = {};
module.exports = mongoose.model("Contacts", ContactsSchema);