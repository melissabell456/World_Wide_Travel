"use strict";

angular.module("TravelGuideApp").controller("BookCtrl", function($scope, BookFactory) {

  BookFactory.getTravelGuides()
  .then( (travelGuides) => {
    $scope.guides = travelGuides;
  });

  // $scope.books = <your array of guide books data>
});
