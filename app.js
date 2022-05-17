const express = require("express");
const path = require("path");
const app = express();

const rutaUser = require('./routes/users.js');
const rutaMain = require('./routes/main.js');
const rutaProducts = require('./routes/products.js');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());

app.set('view engine', 'ejs');

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
