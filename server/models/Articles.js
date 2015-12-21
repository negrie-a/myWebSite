var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		name : Seq.STRING,
		article : Seq.TEXT,
		img : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
