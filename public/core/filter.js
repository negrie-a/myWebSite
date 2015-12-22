app.filter('backline', function () {
  return function (item) {
  	if (item) {
  		return item.replace(/\n/g, "<br />");
  	}
  };
});
