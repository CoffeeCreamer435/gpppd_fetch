"use strict";

var _fetch = require("./src/fetch");

var _UrlBuilder = require("./src/UrlBuilder");

var _HeaderBuilder = require("./src/HeaderBuilder");


_fetch.setBaseUrl("https://jsonplaceholder.typicode.com")
console.log(_fetch.getBaseUrl())
console.log(_UrlBuilder.buildUrl(_fetch.getBaseUrl(), [{"name" : "name", "value": "value"}, {"name" : "test", "value": "tada"}]))

let data = _fetch.doGet(_fetch.getBaseUrl() + "/todos/1", {})

