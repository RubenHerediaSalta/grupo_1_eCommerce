/*---------------REQUIRE----------------*/
const path = require("path");
const express = require("express");
const methodOverride = require('method-override');
const app = express();
const bcrypt = require('bcrypt')

/*---------------MIDDLEWARE----------------*/
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(methodOverride("_method"))

/*---------------TEMPLATE ENGINE----------------*/
app.set('view engine', 'ejs');

/*---------------RUTAS----------------*/
const rutaUser = require('./routes/users.js');
const rutaMain = require('./routes/main.js');
const rutaProducts = require('./routes/products.js');


app.listen(2022 ,()=>{
    console.log('Custom on')
});

/*---------------APP USE----------------*/
app.use('/', rutaMain);
app.use('/users', rutaUser);
app.use('/products', rutaProducts);