app.filter('backline', function () {
  return function (item) {
    return item.replace(/\n/g, "<br />");
  };
});
