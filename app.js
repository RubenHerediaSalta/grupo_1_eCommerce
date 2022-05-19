/*---------------REQUIRE----------------*/
const path = require("path");
const express = require("express");
const methodOverride = require('method-override');
const app = express();

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


app.use('/', rutaUser);
app.use('/usuario', rutaUser);
app.use('/', rutaMain);
app.use('/', rutaProducts);
app.use('/pr1', rutaProducts);
app.use('/pr2', rutaProducts);
app.use('/products', rutaProducts);
