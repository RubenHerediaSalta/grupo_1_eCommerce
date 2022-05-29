const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const userController = {
    login: (req,res) => {
        res.render ('./users/login.ejs')
    }, 
    register: (req,res) => {
        res.render ('./users/register.ejs')
    },
    store: (req, res) =>{
        let avatar;
        if (req.file != undefined) {
            avatar = req.file.filename;
        } else {
            avatar = "default-image.png";
        }
        let newUser = {
            id: users[users.length - 1].id + 1,
            ...req.body,
            password: bcrypt.hashSync(req.body.password , 10),
            avatar: avatar
        };
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, " "));
        res.redirect("/login");
    }
}; 


module.exports = userController; 