"use strict";

const axios = require('axios');
const json = require('./../func/api.json');
const extract = require('./../func/extract.js');

async function comment({ text, url, page }) {
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
      'user-agent': json.useragent
    };

return new Promise(async(resolve, reject) => {

  if (extract(url) == null) {
    return reject({
       type: "007",
       error: "Facebook url not supported",
       docs: `${json.npm}007`
   });
  }
  

 await axios.post(`${json.page}/${extract(url)}/comments`, null, { params: { message: text, access_token: page.token }, headers }).catch(error => console.log(`[ ${page.page} ] > comment failed`));
  console.log(`[ ${page.page} ] > comment success`);

  return resolve(`commenting finnish`);
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = comment;