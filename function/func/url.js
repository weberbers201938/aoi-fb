"use strict";

function url(a) {
  try {
const [ab, cd] = a.split('_');
  return `https://www.facebook.com/${ab}/posts/${cd}`;
 } catch (error) {
    console.log("[ ERROR ] > ", error);
  }
}

module.exports = url;