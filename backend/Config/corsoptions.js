const allowedOrigins = require('./allowedOrigin')
const corsOptions={
    origin:(origin,callback)=>{
        console.log(origin)
        if(allowedOrigins.indexOf(origin)!==-1||!origin){
            callback(null,true);

        }else{
            callback(new Error('Not Allowed by CORS'));
        }
    },
    optionsSuccessStatus:200,


}
module.exports=corsOptions;