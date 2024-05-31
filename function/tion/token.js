"use strict";

const axios = require('axios');
const json = require('./../func/api.json');
const cookie = require('./../func/cookie.js');

async function token(appstate) {
  try {
    const headers = {
      'authority': 'business.facebook.com',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
      'cache-control': 'max-age=0',
      'cookie': cookie(appstate),
      'referer': 'https://www.facebook.com/',
      'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'same-origin',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent': json.useragent
    };

return new Promise(async(resolve, reject) => {
  const response = await axios.get('https://business.facebook.com/content_management', { headers }).catch(errror => console.log("[ ERROR ] > failed to get facebook token\nplease double check your account appstate"));
  const token = response.data.split('EAAG')[1].split('","')[0];

  return resolve({ EAAG: `EAAG${token}` });
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = token;