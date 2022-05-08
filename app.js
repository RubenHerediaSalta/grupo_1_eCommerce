const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");

const rutasLogin = require('./routes/login-register.js')

app.use(express.static(publicPath));
app.set('view engine', 'ejs')

app.listen(2022 ,()=>{
    console.log('Custom on')
});

app.get('/', (req,res)=>{
    res.render(__dirname + '/views/home');
});

app.get('/productDetailNotebook', (req,res)=>{
    res.send(__dirname + '/views/products/productDetailNotebook');
});
app.get('/productCart', (req,res)=>{
    res.send(__dirname + '/views/products/productCart');
});

app.get('/carrito', (req,res)=>{
    res.send(__dirname + '/views/products/carrito');
});





 /* app.get('/login', (req,res)=>{
    res.send(__dirname + '/views/users/login');
});
/* 

/*/ 






app.use('/login', rutasLogin)



app.get('/register', (req,res)=>{
    res.send(__dirname + '/views/users/register');
});
