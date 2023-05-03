const express = require('express');
const app = express();
const cors = require('cors')
const chefs = require('./data/chef/chef.json')
const receipes = require('./data/receipe/receipe.json')
const port = 3000;
app.use(cors())

app.get('/',(req,res) => {
    res.send('this server is running');
})
app.get('/chefs',(req,res) => {
    res.send(chefs);
})

app.get('/receipes/:id',(req,res) => {
    const id = req.params.id
    const chefreceipe = receipes.filter(receipe => receipe.categoryId == id)
    res.send(chefreceipe)
})

app.listen(port,() => {
    console.log(`example this server port id is ${port}`)
})