var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		title : Seq.STRING,
		resume : Seq.TEXT,
		'resume-intro' : Seq.STRING,
		start : Seq.DATE,
		language : Seq.STRING,
		team : Seq.INTEGER,
		time : Seq.INTEGER,
		slider : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
