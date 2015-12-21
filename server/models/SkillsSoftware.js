var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		software : Seq.STRING,
		degres : Seq.INTEGER
	},
	options:
	{
		freezeTableName : true
	}
}
