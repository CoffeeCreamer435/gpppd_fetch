"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeader = getHeader;
exports.addHeader = addHeader;
exports.removeHeader = removeHeader;
const header = {};
/**
 * Generate a header object for your request.
 */

function getHeader() {
  return header;
}
/**
 * Set a headerobject {headerName, headerValue}
 * @param {Object} headerObject 
 */


function addHeader(headerObject) {
  this.header.append(headerObject);
}
/**
 * Remove a header from the object
 * @param {string} headerName 
 */


function removeHeader(headerName) {
  delete header[headerName];
}