function productsMiddleware(req, res, next) {
	if (!req.session.userLogged) {
		return res.redirect('./allProducts');
	}
	next();
}

module.exports = productsMiddleware;