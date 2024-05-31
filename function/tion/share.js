"use strict";

const axios = require('axios');
const json = require('./../func/api.json');

async function share({ length, url, token }) {
    let sharedCount = 0;
    let timer = null;

if (!token.startsWith("EAAD6V7")) {
    console.log({
        type: "004",
        error: "EAAD6V7 is required",
        docs: `${json.npm}004`
    });
}

console.log("gathering data please wait...");

const sharePost = async () => {
 try {
 const response = await axios.post(`${json.page}/me/feed?access_token=${token}&fields=id&limit=1&published=0`, { link: url, privacy: { value: 'SELF' }, no_story: true }, { headers: { authority: 'graph.facebook.com', 'cache-control': 'max-age=0', 'sec-ch-ua-mobile': '?0', 'user-agent': json.useragent }, method: 'post' });
     
            sharedCount++;
 console.log(`success share: ${sharedCount}`);
            
     if (sharedCount === length) {
         clearInterval(timer);
    console.log(`Finished sharing posts\nTotal of shares: ${sharedCount}`);

    if (response.data.id) {
        setTimeout(async() => {
       try {
await axios.delete(`${json.page}/${postId}?access_token=${accessToken}`);
     } catch (error) {
console.error('Failed to delete post\nPlease double check your token');
     }
    }, 60 * 60);
   }
  }
} catch (error) {
    console.error('Failed to share post\nPlease double check your token');
 }
};
 timer = setInterval(sharePost, 1500);
    
 setTimeout(() => {
    clearInterval(timer);
  console.log('Share post ended');
 }, length * 1500);
};

module.exports = share;