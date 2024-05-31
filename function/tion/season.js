"use strict";

const request = require('request');
const cheerio = require('cheerio');
const json = require('./../func/api.json');

async function login(email, password) {
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

    const jar = request.jar();
    
return new Promise(async(resolve, reject) => {
 request({ url: json.season, headers: headers, jar: jar }, (error, response, body) => {
        
 if (error) {
  return reject({
   type: "001",
   error: "Initial request failed",
   docs: `${json.npm}001`
 });
}
    
const $ = cheerio.load(body);
const lsd = $('input[name="lsd"]').val();
const jazoest = $('input[name="jazoest"]').val();
const m_ts = $('input[name="m_ts"]').val();
const li = $('input[name="li"]').val();
const try_number = $('input[name="try_number"]').val();
const unrecognized_tries = $('input[name="unrecognized_tries"]').val();
const bi_xrwh = $('input[name="bi_xrwh"]').val();

 if (!lsd || !jazoest || !m_ts || !li || !try_number || !unrecognized_tries || !bi_xrwh) {
  return reject({
    type: "002",
    error: "Failed to retrieve login form data",
    docs: `${json.npm}002`
  });
}
   
  const formData = {
     lsd: lsd,
     jazoest: jazoest,
     m_ts: m_ts,
     li: li,
     try_number: try_number,
     unrecognized_tries: unrecognized_tries,
     bi_xrwh: bi_xrwh,
     email: email,
     pass: password,
    login: "submit"
};

request.post({ url: leiam.season, headers: headers, form: formData, followAllRedirects: true, timeout: 300000, jar: jar }, async(error, response, body) => {
         
  if (error) {
   return reject({
     type: "003",
     error: "Login request failed",
     docs: `${json.npm}003`
   });
}

  const cookies = jar.getCookies(json.season);
  const state = cookies.map(abc => ({
  key: abc.key,
  value: abc.value,
  domain: abc.domain,
  path: abc.path,
  hostOnly: !abc.domain.startsWith('.'),
  creation: new Date().toISOString(),
  lastAccessed: new Date().toISOString()
}));
  
const appstate = JSON.stringify(state, null, 4);
  return resolve(JSON.parse(appstate));
        });
      });
    });
  } catch (error) {
    console.error("[ ERROR ] > ", error);
  }
}


module.exports = login;