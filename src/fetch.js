"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBaseUrl = setBaseUrl;
exports.getBaseUrl = getBaseUrl;
exports.doGet = doGet;
exports.doSave = doSave;
let baseUrl;

function setBaseUrl(url) {
  baseUrl = url;
}

function getBaseUrl() {
  return baseUrl;
}

async function doGet(url, header) {
  let fetchData = await fetch(baseUrl.concat(url), header);

  if (await fetchData.ok) {
    if (fetchData.status === fetchData.status[0] === "5") {
      console.error("There was a 5XX exception in you request. Check the network tab for more information!");
    }

    try {
      return await fetchData.json();
    } catch (error) {
      return await fetchData.text();
    }
  }
}

async function doSave(url, header, body, requestOption) {
  let fetchData = await fetch(baseUrl.concat(url), {
    headers: header,
    method: requestOption,
    body: body
  });

  if (await fetchData.ok) {
    if (fetchData.status === fetchData.status[0] === "5") {
      console.error("There was a 5XX exception in you request. Check the network tab for more information!");
    }

    try {
      return await fetchData.json();
    } catch (error) {
      return await fetchData.text();
    }
  }
}