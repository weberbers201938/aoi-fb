"use strict";

const axios = require('axios');
const json = require('./../func/api.json');
const url = require('./../func/url.js');

async function post({ text, token }) {
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

  if (!token.startsWith("EAAD6V7")) {
    return reject({
      type: "004",
      error: "EAAD6V7 is required",
      docs: `${json.npm}004`
    });
  }

  if (!text) { return reject("text cannot be left blank"); }
  
const response = await axios.post(`${json.page}/v18.0/me/feed`, null, { params: { message: text, access_token: token, privacy: JSON.stringify({ value: 'EVERYONE' })}, headers }).catch(error => console.log(`[ POST ] > there's an error while posting your request please try to check your account and change your token`));
  return resolve({
    success: true,
    text,
    id: response.data.id,
    link: url(response.data.id)
   });
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = post;