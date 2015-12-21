var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		language : Seq.STRING,
		text : Seq.TEXT,
		type: Seq.STRING,
		degres : Seq.INTEGER
	},
	options:
	{
		freezeTableName : true
	}
}
