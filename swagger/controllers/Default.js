'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.devProductsGET = function devProductsGET (req, res, next) {
  Default.devProductsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.devProductsProductIdGET = function devProductsProductIdGET (req, res, next) {
  Default.devProductsProductIdGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
