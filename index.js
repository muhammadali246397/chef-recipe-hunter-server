const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res) => {
    res.send('this server is running');
})

app.listen(port,() => {
    console.log(`example this server port id is ${port}`)
})