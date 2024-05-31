"use strict";

function extract(link) {
  try {
 const i = link.match(/\/(\d+)\/posts\/(\d+)\//);
 const ii = link.match(/id=(\d+)&.*?story_fbid=(\d+)/);
if (i) {
  return `${i[1]}_${i[2]}`;
} else if (ii) {
  return `${ii[1]}_${ii[2]}`;
} else {
  return null;
 }
} catch (error) {
    console.log("[ ERROR ] > ", error);
 }
}

module.exports = extract;