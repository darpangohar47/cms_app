const connectToMongo=require('./db');
const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });
const express = require('express')
// var express = require('express')
var cors = require('cors');
const corsOptions = require('./Config/corsoptions');
const app = express()
const port = process.env.PORT

app.use(cors(corsOptions))
// connect to database
connectToMongo();
app.use(express.json())
// route for project
app.use('/v1/project',require('./routes/project'));
// route for client
app.use('/v1/client',require('./routes/client'));
// route for contact
app.use('/v1/contact',require('./routes/contactForm'));
// route for subscription
app.use('/v1/subscription',require('./routes/subscription'));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})