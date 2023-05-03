const express = require('express');
const app = express();
const cors = require('cors')
const chefs = require('./data/chef/chef.json')
const port = 3000;
app.use(cors())

app.get('/',(req,res) => {
    res.send('this server is running');
})
app.get('/chefs',(req,res) => {
    res.send(chefs);
})

app.listen(port,() => {
    console.log(`example this server port id is ${port}`)
})