"use strict";

angular.module("TravelGuideApp").controller("BookCtrl", function($scope, BookFactory) {

  BookFactory.getTravelGuides()
  .then( (travelGuides) => {
    $scope.guides = travelGuides;
  });

  $scope.displayBookString = "book in guides | orderBy: '' | filter: {type: bookType, title: titleSearch}";
  $scope.sortPrices = () => {
    $scope.displayBookString = "book in guides | orderBy: '-price' | filter: {type: bookType, title: titleSearch}";
    // return "book in guides | orderBy: '-price' | filter: {type: bookType, title: titleSearch}";
  };

  // $scope.books = <your array of guide books data>
});
