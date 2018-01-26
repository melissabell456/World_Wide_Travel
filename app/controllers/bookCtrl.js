"use strict";

angular.module("TravelGuideApp").controller("BookCtrl", function($scope, BookFactory) {

  // calling $http to get data from guides.json and scoping it for use in partial
  BookFactory.getTravelGuides()
  .then( (travelGuides) => {
    $scope.guides = travelGuides;
  });

});
