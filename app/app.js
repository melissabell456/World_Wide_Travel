"use strict";

angular.module("TravelGuideApp", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
  .when("/", {
    templateUrl: "../partials/guides.html",
    controller: "BookCtrl"
  })
  .otherwise("/")
});