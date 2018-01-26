"use strict";

angular.module("TravelGuideApp").factory("BookFactory", function($http, $q) {

  const getTravelGuides = () => {
    return $q((resolve,reject) => {
      $http
      .get("../../data/guides.json")
      .then( (guides) => {
        console.log(guides.data.guides);
        resolve(guides.data.guides);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };
  return { getTravelGuides };
})
// A call to the data folder for guides.json using $http
// Use the $q service to wrap your http call in a promise