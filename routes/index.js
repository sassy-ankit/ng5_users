var express = require('express');
var router = express.Router();

/* User Registration . */
router.post('/user/register', function(req, res, next) {
	res.send('Response from /api/user/registration');
});

router.post('/user/login', function(req, res, next) {
	res.send('Response from /api/user/login');
});

router.post('/user/logout', function(req, res, next) {
	res.send('Response from /api/user/logout');
});

module.exports = router;
