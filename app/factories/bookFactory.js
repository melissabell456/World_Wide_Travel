"use strict";

angular.module("TravelGuideApp").factory("BookFactory", function($http, $q) {

  const getTravelGuides = () => {
    return $q((resolve,reject) => {
      $http
      .get("../../data/guides.json")
      .then( (guides) => {
        resolve(guides.data.guides);
      })
      .catch((err) => {
        reject(err);
      });
    });
  };
  return { getTravelGuides };
})
