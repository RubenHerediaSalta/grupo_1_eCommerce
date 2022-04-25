const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(2022 ,()=>{
    console.log('Custom on')
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productDetailNotebook', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetailNotebook.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});