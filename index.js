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