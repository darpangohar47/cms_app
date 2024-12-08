const mongoose = require("mongoose");
const { Schema } = mongoose;

const SubscriptionSchema = new Schema(
  {
    
    email:{type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
  },
  
);
mongoose.models = {};
module.exports = mongoose.model("Subscription", SubscriptionSchema);