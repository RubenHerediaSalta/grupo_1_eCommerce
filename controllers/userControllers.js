const loginRegisterController = {
    login: (req,res) => {
        res.render ('./users/login.ejs')
    }, 
    register: (req,res) => {
        res.render ('./users/register.ejs')
    }
}; 


module.exports = loginRegisterController; 


