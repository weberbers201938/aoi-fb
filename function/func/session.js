"use strict";

function session(a) {
  try {
    var b = "";
  for (var i = 0; i < a.length; i++) {
        b += a[i].name + "=" + a[i].value + "; ";
    }
    return b;
   } catch (error) {
    console.log("[ ERROR ] > ", error);
  }
}

module.exports = session;