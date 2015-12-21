var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
		name : Seq.STRING,
		'date-of-birth' : Seq.DATE,
		nationality : Seq.STRING,
		adress : Seq.TEXT,
		phone : Seq.STRING,
		email : Seq.STRING,
		resume : Seq.TEXT,
		'cv-path' : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
