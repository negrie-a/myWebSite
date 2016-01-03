var app = angular.module('Main', [
			'ngRoute',
			'ngAnimate',
			"ngSanitize",
			"ui.bootstrap",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering",
			"uiGmapgoogle-maps"
])
.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCzInZZdh8h_O8qWXUCsuSTcwO1HNvVYoA',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});
