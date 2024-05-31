"use strict";

const axios = require('axios');
const json = require('./../func/api.json');
const session = require('./../func/session.js');

async function key(email, password) {
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

 const response = await axios.get(`${json.token}/method/auth.login?access_token=350685531728%7C62f8ce9f74b12f84c123cc23437a4a32&format=json&sdk_version=2&email=${email}&locale=en_US&password=${password}&sdk=ios&generate_session_cookies=1&sig=3f555f99fb61fcd7aa0c44f58f522ef6`, { headers }).catch(error => {});
  const result = await axios.get(`${json.key}/method/auth.login?format=json&email=${email}&password=${password}&locale=en_US&method=auth.login&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`, { headers }).catch(error => {});
  
 if (response.status !== 200 || result.status !== 200) {
   return reject({
      type: "003",
      error: "Login request failed",
      docs: `${json.npm}003`
  });
 }

if (response.data.error_code === 613) {
  return resolve(JSON.parse(response.data.error_data));
}
  
 const res = await axios.get(`${json.key}/method/auth.getSessionforApp?format=json&access_token=${response.data.access_token}&new_app_id=275254692598279`, { headers }).catch(error => {});
  
 return resolve({
   EAAG: (await token(response.data.session_cookies)).EAAG,
   EAAAAU: response.data.access_token,
   EAAD6V7: res.data.access_token,
   EAAAAAY: result.data.access_token,
   uid: response.data.uid,
   confirmed: res.data.confirmed,
   key: response.data.session_key,
   secret: response.data.secret,
   id: response.data.machine_id,
   stroage: response.data.user_storage_key,
   machineID: res.data.machine_id,
   session: res.data.session_key,
 });
  
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

async function token(appstate) {
  try {
    const headers = {
      'authority': 'business.facebook.com',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
      'cache-control': 'max-age=0',
      'cookie': session(appstate),
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

module.exports = key;