var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		'fk-id-projects' : Seq.INTEGER,
		image : Seq.STRING,
		gallery : Seq.INTEGER
	},
	options:
	{
		freezeTableName : true
	}
}
