var path = require('path');
var root = path.resolve(__dirname, '../..');

module.exports.init = function() {
	GLOBAL.$root = root;

	GLOBAL.$path = {
		/* SERVER PATH */
		public		: path.resolve(root, 'public') + '/',
		server		: path.resolve(root, 'server') + '/',
		core		: path.resolve(root, 'server/core') + '/',
		controllers	: path.resolve(root, 'server/controllers') + '/',
		models		: path.resolve(root, 'server/models') + '/',
		database	: path.resolve(root, 'server/database') + '/',
	};
}
