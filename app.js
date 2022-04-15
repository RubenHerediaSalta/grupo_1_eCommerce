const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(2022 ,()=>{
    console.log('Custom on')
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});