"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUrl = buildUrl;
let baseQueryUrl = "?";

function buildUrl(url, queryUrl = null) {
  let baseUrl = url;

  if (queryUrl != null || queryUrl != "") {
    queryUrl.forEach(queryUrlPart => {
      baseUrl = baseUrl += baseQueryUrl;
      baseUrl = baseUrl += queryUrlPart["name"] + "=" + queryUrlPart["value"];
    });
  }

  return baseUrl;
}