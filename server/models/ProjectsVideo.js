var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		'fk-id-projects' : Seq.INTEGER,
		video : Seq.STRING,
		img : Seq.STRING,
		type : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
