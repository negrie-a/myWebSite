var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		'fk-id-projects' : Seq.INTEGER,
		title : Seq.STRING,
		section : Seq.TEXT,
		img1 : Seq.STRING,
		img2 : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
