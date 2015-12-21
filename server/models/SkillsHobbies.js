var orm = require($path.core + 'database');
var Seq = orm.Seq();

module.exports = {
	model : {
  			hobbie : Seq.STRING,
  			icon : Seq.STRING
	},
	options:
	{
		freezeTableName : true
	}
}
