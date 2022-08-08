/*---------------REQUIRE----------------*/
const path = require("path");
const express = require("express");
const methodOverride = require('method-override');
const app = express();
const session = require('express-session');
const cookies = require('cookie-parser');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

/*---------------MIDDLEWARE----------------*/
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({secret: "Secret",resave: false,saveUninitialized: false,}));
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({ extended: false }));

/*---------------TEMPLATE ENGINE----------------*/
app.set('view engine', 'ejs');

/*---------------RUTAS----------------*/
const rutaUser = require('./routes/users.js');
const rutaMain = require('./routes/main.js');
const rutaProducts = require('./routes/products.js');

/* ------------RUTAS API------------- */

const apiUserRoute = require('./routes/api/users'); 
const apiProductsRoute = require('./routes/api/products'); 
const apiSectionsRoute = require('./routes/api/sections'); 

app.listen(2022 ,()=>{
    console.log('Custom on')
});

/*---------------APP USE----------------*/

app.use('/', rutaMain);
app.use('/users', rutaUser);
app.use('/products', rutaProducts);

/*---------------- APP USE API ----------------*/

app.use('/api/users', apiUserRoute); 
app.use('/api/products', apiProductsRoute); 
app.use('/api/sections', apiSectionsRoute); 