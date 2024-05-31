"use strict";

const axios = require('axios');
const json = require('./../func/api.json');

async function page(token) {
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
      'Authorization': `Bearer ${token}`
    };

return new Promise(async(resolve, reject) => {

  if (!token.startsWith("EAAD6V7")) {
    return reject({
      type: "004",
      error: "EAAD6V7 is required",
      docs: `${json.npm}004`
    });
  }

 const response = await axios.get(`${json.page}/v18.0/me/accounts`, { headers }).catch(error => console.log("[ ERROR ] > failed to get facebook pages\nplease double check if you have existing pages in your account"));
 
 if (!response) {
   return reject({
      type: "006",
      error: "Page not found",
      docs: `${json.npm}006`
  });
 }

    const ab = new Array();
for (var cd of response.data.data) {
 ab.push({
   page: cd.name,
   category: cd.category,
   pid: cd.id,
   token: cd.access_token,
 });
}
 return resolve(ab);
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = page;