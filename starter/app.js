const express = require('express');
const app = express();

//routes
app.get('/hello',(req,res)=>{
    res.send('<h1>Task manager app</h1>')
})


const port = 3000;
app.listen(port,console.log(`server is listening on port ${port}......`))
//console.log('Task Manager')
  