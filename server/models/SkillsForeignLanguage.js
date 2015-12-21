var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		language : Seq.STRING,
		degres : Seq.INTEGER
	},
	options:
	{
		freezeTableName : true
	}
}
