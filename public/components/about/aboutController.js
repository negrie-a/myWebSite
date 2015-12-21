app.controller('aboutController', ['$scope', 'aboutFactory', function ($scope, aboutFactory){

    $scope.map = { center: { latitude: 42.634534, longitude: 2.762357 }, zoom: 11, options: {scrollwheel: false} };
$scope.marker = {
      id: 0,
      coords: {
        latitude: 42.634534,
        longitude: 2.762357
      },
      options: {icon:'/assets/img/icon_geo.png'}
  }
    aboutFactory.getProfil().then(
        function(data)
        {
            $scope.profil = data[0];
            var prof = data[0];
            $scope.profilData = [{
                "name" : "Nom",
                "data" : prof.name
            },
            {
                "name" : "Date de naissance",
                "data" : prof['date-of-birth'].substr(0,10)
            },
            {
                "name" : "Nationalité",
                "data" : prof.nationality
            },
            {
                "name" : "Adresse",
                "data" : prof.adress
            },
            {
                "name" : "Téléphone",
                "data" : prof.phone
            },
            {
                "name" : "Email",
                "data" : prof.email
            },
            {
                "name" : "Vehicule",
                "data" : "Permis B"
            }];
        },
        function(error)
        {
            console.log(error);
        });
    return;
}]);
