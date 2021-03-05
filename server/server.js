const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(
    'mongodb+srv://hexagon:hexagon@cluster0.kqeye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useUnifiedTopology: true, useNewUrlParser: true},
    () => console.log("Connected"))

const connection = mongoose.connection
console.log(connection.collection('user').insertOne({name: "Quanh"}))
app.get('/', (req, res) => {
    res.send('oke')
})

app.listen(5000, () => console.log("Server is running"))