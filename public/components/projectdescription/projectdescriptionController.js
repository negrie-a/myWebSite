app.controller('projectdescriptionController', ['$scope', "$sce", "$timeout", "$rootScope", "$routeParams", 'projectdescriptionFactory', function($scope, $sce, $timeout, $rootScope, $routeParams, projectdescriptionFactory)
{
	/////////////
	//VIDEOGULAR
	/////////////

	var controller = this;
	controller.state = null;
	controller.API = null;
	controller.currentVideo = 0;
	controller.pictures = [];
	controller.videoProject = false;
	controller.videos = [];
	controller.slider = [];

	controller.onPlayerReady = function(API) {
		controller.API = API;
	};

	controller.onCompleteVideo = function() {
		controller.isCompleted = true;

		controller.currentVideo++;

		if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

		controller.setVideo(controller.currentVideo);
	};

	projectdescriptionFactory.getVideoProject($routeParams.id)
	.then(function(projectVideo)
	{
		if (projectVideo.lengh == 0)
			controller.videoProject = false;
		else
		{
			for (index in projectVideo)
			{
				var source = [];
				types = projectVideo[index].type.split(" ");
				for (i in types)
				{
					source.push({src: projectVideo[index].video + "." + types[i], type: "video/" + types[i]});
				}
				controller.videos.push({
					sources : source,
					img : projectVideo[index].img
				});
			}

			controller.config = {
				preload: "none",
				autoHide: false,
				autoHideTime: 3000,
				autoPlay: false,
				sources: controller.videos[0].sources,
				theme: {
					url: "bower_components/videogular-themes-default/videogular.css"
				}
			};
		}
	});

	controller.setVideo = function(index) {
		controller.API.stop();
		controller.currentVideo = index;
		controller.config.sources = controller.videos[index].sources;
		$timeout(controller.API.play.bind(controller.API), 100);
	};

	//////////////////

	projectdescriptionFactory.getProjectById($routeParams.id)
	.then(function(project)
	{
		controller.project = project[0];
		projectdescriptionFactory.getImageByList(controller.project.slider)
		.then(function(imgList)
		{
			controller.slider = imgList;
		},
		function(msg)
		{
			alert(msg);
		});

		$scope.information = [{
			"icon" : "fa fa-calendar",
			"title" : "Date of completion",
			"data" : controller.project.start.substring(0,10)
		},
		{
			"icon" : "fa fa-bullseye",
			"title" : "Language",
			"data" : controller.project.language
		},
		{
			"icon" : "fa fa-users",
			"title" : "Teams",
			"data" : controller.project.team
		},
		{
			"icon" : "fa fa-clock-o",
			"title" : "Project time",
			"data" :  controller.project.time + " days"
		}];
	},
	function(msg)
	{
		alert(msg);
	});

	//////////////////
	
	projectdescriptionFactory.getImageById($routeParams.id)
	.then(function(images)
	{
		if (images.length == 0)
			controller.pictures = false;
		else
		{
			for (image in images)
				if (images[image].gallery === 0)
				controller.pictures.push({img : "assets/img/" + images[image].image})
		}

		projectdescriptionFactory.getDetailProject($routeParams.id)
		.then(function(projectDetails)
		{
			controller.descriptionProject = projectDetails;
			for (item in controller.descriptionProject)
			{
				for (img in images)
				{
					if (images[img].id == controller.descriptionProject[item].img1)
						controller.descriptionProject[item].img1 = images[img].image;
					if (images[img].id == controller.descriptionProject[item].img2)
						controller.descriptionProject[item].img2 = images[img].image;
				}
			}
		});
	});

	//////////////////

	controller.videoScroll = function()
	{
		$('html, body').animate({
			scrollTop: $("#video").offset().top
		}, 2000);
	}
	return ;
}])