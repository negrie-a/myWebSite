app.controller('homeController', ['$scope', 'articleFactory', 'contactFactory', 'projectFactory', '$rootScope', function ($scope, articleFactory, contactFactory, projectFactory, $rootScope){
    var self = this;

    self.contact = [];

    contactFactory.getContact()
    .then(function(contact)
    {
        self.contact = contact[0];
    },
    function()
    {

    });

    self.favoriteProject = [{
        index: "2",
        name : "Raytracer",
        src : "/assets/img/projets/raytracer/scene14.jpg"
    },
    {
        index: "1",
        name : "Zappy",
        src : "/assets/img/projets/zappy/menu.png"
    },
    {
        index: "4",
        name : "Snake",
        src : "/assets/img/projets/nibbler/obstacleOpenGL.png"
    }];

    return;
}]);
