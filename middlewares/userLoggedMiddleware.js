const User = require('../models/User')


function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailCookie = req.cookies.userEmail;
	let userCookie = User.findByField('email', emailCookie);

	if (userCookie){
		req.session.userLogged = userCookie;
	}

	if (req.session.userLogged){
		res.locals.isLogged = true;
		res.locals.admin = true;
		res.locals.user = req.session.userLogged
	}



	next();
}

module.exports = userLoggedMiddleware;