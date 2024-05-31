"use strict";

function cookie(input) {
  try {
 return input.map(ipt => ipt = ipt.key + "=" + ipt.value).join(";");
  } catch (error) {
    console.log("[ ERROR ] > ", error);
  }
}

module.exports = cookie;