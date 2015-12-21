var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		title : Seq.STRING,
		text : Seq.TEXT,
		icon : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
