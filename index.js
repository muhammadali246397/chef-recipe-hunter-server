const express = require('express');
const app = express();
const cors = require(cors)
const port = 3000;
app.use(cors());

app.get('/',(req,res) => {
    res.send('this server is running');
})

app.listen(port,() => {
    console.log(`example this server port id is ${port}`)
})