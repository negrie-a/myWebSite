/*========================================
=            INDEX Controller            =
========================================*/

var path = require('path');

var index = function(req, res) {
    res.sendFile($path.public +'index.html');
}

module.exports = {

    '/' : [{
	verb 		: 'get',
	action 		: index,
	acl		: {
	    level	: 'public',
	    failureRedirect	: '/'
	}
    }]
}
