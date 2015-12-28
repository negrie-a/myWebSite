var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		'get-in-touch' : Seq.TEXT,
		location : Seq.STRING,
		phone : Seq.STRING,
		email : Seq.STRING,
		facebook : Seq.STRING,
		linkedin : Seq.STRING,
		twitter : Seq.STRING,
		google : Seq.STRING,
		github : Seq.STRING,
	},
	options:
	{
		freezeTableName : true
	}
}
