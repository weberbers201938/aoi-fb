"use strict";

const axios = require('axios');
const json = require('./../func/api.json');

async function gpt(query) {
  try {
return new Promise(async(resolve, reject) => {

  const response = (await axios.post(json.gpt, { messages: [{ content: query, role: 'user' }], id: '', previewToken: null, userId: '', codeModelMode: true, agentMode: [], trendingAgentMode: [], isMicMode: false, isChromeExt: false, githubToken: null, webSearchMode: false, maxTokens: '10240' })).data.replace(/\$@\$(.*?)\$@\$/g, '');

  return resolve({ response });
  });   
 } catch (error) {
  console.log("[ ERROR ] > ", error);
 }
}

module.exports = gpt;