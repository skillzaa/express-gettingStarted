const express = require("express");
const path = require('path');
const app = express();
/**
 * HTTP Verbs
 * app.get();
 * app.post();
 * app.delete();
 * app.put();
 */
app.get('/',(req,res)=>{
    //console.log('Request :>> ', req);
    //res.send("Hello World.....Nodemon installed");
    res.sendFile(path.join(__dirname,'public','index.html'));
/**we can send json with res.json, to render using a templating engine we use res.render and we can also send files etc using res.sendFile */    
});
app.listen(3000);