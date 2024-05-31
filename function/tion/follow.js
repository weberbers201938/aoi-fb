"use strict";

const axios = require('axios');
const json = require('./../func/api.json');

async function comment({ uid, page }) {
  try {

    const headers = {
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'en_US',
      'cache-control': 'max-age=0',
      'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': "Windows",
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': json.useragent,
      'Authorization': `Bearer ${page.token}`
    };

return new Promise(async(resolve, reject) => {
 if (uid.startsWith("https://") || isNaN(uid)) {
    return reject({
        type: "008",
        error: "Invalid uid",
        docs: `${json.npm}008`
    });
  }

  await axios.post(`${json.page}/v18.0/${uid}/subscribers`, {}, { headers }).catch(error => console.log(`[ ${page.page} ] > follow failed`));
  console.log(`[ ${page.page} ] > follow success`);

  return resolve(`following finnish`);
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = comment;