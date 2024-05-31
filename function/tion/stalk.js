"use strict";

const axios = require('axios');
const json = require('./../func/api.json');

async function stalk(uid, token) {
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
  
    const response = await axios.get(`${json.page}/${uid}?fields=age_range,picture,cover,name,first_name,email,about,birthday,gender,website,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0)&access_token=${token}`, { headers }).catch(error => console.log("[ ERROR ] > failed to get facebook information\nplease double check your token"));

return resolve({
   name: response?.data?.name || "Facebook User",
   firstName: response?.data?.first_name || "No available data",
   bio: response?.data?.about || "No available data",
   gender: response?.data?.gender || "No available data",
   quote: response?.data?.quotes || "No available data",
   birthday: response?.data?.birthday || "No available data",
   hometown: response?.data?.hometown?.name || "No available data",
   location: response?.data?.location?.name || "No available data",
   status: response?.data?.relationship_status || "No available data",
   partner: { name: response?.data?.significant_other?.name || "No available data", uid: response?.data?.significant_other?.id || "No available data" },
   username: response?.data?.username || "No available data",
   age: response?.data.age_range?.min || "No available data",
   uid: response?.data?.id || "No available data",
   followers: response?.data?.subscribers?.summary?.total_count || "No available data",
   profile: `${json.page}/${response?.data?.id || uid}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
   cover: response?.data?.cover?.source || "No available data",
   link: response?.data?.link || "No available data"
  });
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = stalk;