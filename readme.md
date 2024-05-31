<h1 align="center"> 
  <img src="https://i.ibb.co/rcGfh4w/images-q-tbn-ANd9-Gc-TJz-UZf-El-Zqhxft-Q12-Qf3-Wt6-JDGt2-Bp4-PBe-A-usqp-CAU.png" alt="AoiSai">
</h1>

<p align="center">Your key to manipulate your information on Facebook in an easy way.</p>
<p align="center">Created by <a href="https://www.facebook.com/learnfromber">AoiSai</a></p>

**Installation:**
```js
npm i aoi-fb
```
<br>

**Calling:**
```js
const fb = require("aoi-fb");
```
<br>

**Error Handling:**

Error documentation can be found on [ErrorDocs](#ErrorDocs)

<br>

**Usages:**
<br> 
• [comment](#comment)<br>Post a comment using your account
<br> 

• [createPage](#createPage)<br>Create a Facebook page using your account
<br> 

• [download](#download)<br>Download Facebook video including reels
<br> 

• [follow](#follow)<br>Auto follow using your Facebook pages
<br> 

• [getKey](#getKey)<br>Get your EAAG, EAAAAU, EAAD6V7, and EAAAAAY
<br>

• [getPage](#getPage)<br>Get your EAAD6V7 page
<br> 

• [post](#post)<br>Create a public post using your account
<br>

• [getAppstate](#getAppstate)<br>Get your appstate by logging in with your email and password
<br> 

• [share](#share)<br>Auto share your Facebook post
<br>

• [stalk](#stalk)<br>Get the information of a Facebook user
<br> 

• [getToken](#getToken)<br>Get your EAAG token using appstate
<br>

• [gpt](#gpt)<br>Your promotable AI


<br> <br>

## comment
Before we proceed, make sure that you have an existing Facebook page in your account.
```js
const fb = require("aoi-fb");

// Paste your EAAD6V7 token here
const access = await fb.getPage(""); 

 // We're getting your Facebook pages
for (var page of access) {
  const facebook = await fb.comment({
    text: "", // Your comment
    length: 1, // Number of comments 
    url: "", // Facebook post URL
    page
  })
    console.log(facebook);
 }
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

// We're going to use the EAAD6V7
const access = await fb.getPage(token.EAAD6V7);

// We're getting your Facebook pages
 for (var page of access) {
 const facebook = await fb.comment({
   text: "", // Your comment
   length: 1, // Number of comments 
   url: "", // Facebook post URL
   page
 })
   console.log(facebook);
}
```

<br> <br>

## createPage
This is just an experimental feature and still has many bugs in it.
```js
const fb = require("aoi-fb");

// Use your appstate
const facebook = await createPage(appstate);
  console.log(facebook);
```
If you don't have an appstate, then we will get it by logging in.
```js
const fb = require("aoi-fb");

// First, we need to login to get your appstate
const email = "615594487example";
const password = "example";
const appstate = await getAppstate(email, password);

// We're going to use the appstate as login
const facebook = await createPage(appstate);
   console.log(facebook);
```

<br><br>


## download
Get Facebook thumbnail, title, SD, and HD URL.
```js
const fb = require("aoi-fb");

// Paste the Facebook video/reels URL
const facebook = await fb.download("");
 console.log(facebook);
```

<br><br>


## follow
Before we proceed, make sure that you have an existing Facebook page in your account.
```js
const fb = require("aoi-fb");

// Paste your EAAD6V7 token here
const access = await fb.getPage(""); 

 // We're getting your Facebook pages
for (var page of access) {
  const facebook = await fb.follow({
    uid: "", // Paste your Facebook UID here
    page
  })
    console.log(facebook);
 }
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

// We're going to use the EAAD6V7
const access = await fb.getPage(token.EAAD6V7);

// We're getting your Facebook pages
 for (var page of access) {
   const facebook = await fb.follow({
     uid: "", // Paste your Facebook UID here
     page
   })
     console.log(facebook);
  }
```

<br><br>


## getKey
It will get all of your Facebook tokens.
```js
const fb = require("aoi-fb");

// First, we need to log in to your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);
  console.log(token)
```

<br><br>


## getPage
Make sure you have an existing Facebook page in your account.
```js
const fb = require("aoi-fb");

// Paste your EAAD6V7 token here
const facebook = await fb.getPage(""); 
 console.log(facebook);
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

// We're going to get your page's information
const facebook = await fb.getPage(token.EAAD6V7);
 console.log(facebook);
```

<br><br>

## post
Gain access to your account by posting a text.
```js
const fb = require("aoi-fb");

// We will only use your token
const facebook = await post({
    text: "", // Your post
    token: "" // Paste your EAAD6V7 token
  });
console.log(facebook);
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email =

 "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

// We will make a post now
const facebook = await post({
    text: "", // Your post
    token: token.EAAD6V7
});
console.log(facebook);
```

<br><br>

## getAppstate
It can be used for your Messenger bot.
```js
const fb = require("aoi-fb");

// We're logging into your account
const email = "615594487example";
const password = "example";
const facebook = await getAppstate(email, password);
 console.log(facebook);
```

<br><br>


## share
Spam share using your account.
```js
const fb = require("aoi-fb");

await fb.share({
    length: 1, // How many shares you want
    url: "", // Link of your post
    token: "" // Paste your EAAD6V7 token
});
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

await fb.share({
    length: 1, // How many shares you want
    url: "", // Link of your post
    token: token.EAAD6V7
});
```

<br><br>


## stalk
```js
const fb = require("aoi-fb");

const uid = ""; // Paste some Facebook user ID
const token = ""; // Paste your EAAD6V7 token

const facebook = await fb.stalk(uid, token);
 console.log(facebook);
```
If you don't have a Facebook token, then
```js
const fb = require("aoi-fb");

// First, we need to get your Facebook token by logging into your account 
const email = "615594487example";
const password = "example";
const token = await fb.getKey(email, password);

const uid = ""; // Paste some Facebook user ID

const facebook = await fb.stalk(uid, token.EAAD6V7);
 console.log(facebook);
```

<br><br>

## getToken
Appstate method for Messenger bot.
```js
const fb = require("aoi-fb");

// Assuming that you have this 
const appstate = require("./appstate.json");

const facebook = await fb.getToken(appstate);
 console.log(facebook);
```



<br><br>

## gpt
Unlimited and detailed result.
```js
const fb = require("aoi-fb");

// Prompt something
const facebook = await fb.gpt("");
 console.log(facebook);
```



## ErrorDocs
List of error types.

<br>

### 001
- Explanation:
<br>This error occurs when it fails to get a response from Facebook. 
<br>

- Solution:
<br>Please contact the [developer](https://www.facebook.com/learnfromber). Only the developer can fix this issue and update the package.

<br>

### 002

- Explanation:
<br>This error occurs when there's no available data for your account.
<br>

- Solution:
<br>Check your Facebook account; maybe it's locked. If there's two-factor authentication, please turn it off. If this doesn't work, please check your internet connection; this might solve your problem.

<br>

### 003

- Explanation:
<br>This error occurs when you have two-factor authentication enabled in your account. 
<br>

- Solution:
<br>Just turn off two-factor authentication. If this doesn't work, please change your password and log in again.

<br>

### 004

- Explanation:
<br>This error occurs when you use an invalid access token instead of EAAD6V7.
<br>

- Solution:
<br>To fix this, paste your EAAD6V7 token.

<br>

### 005

- Explanation:
<br>This error occurs when you put the wrong reaction that is not supported.
<br>

- Solution:
<br>To fix this issue, only use one reaction from these types: (HAHA, SAD, WOW, LOVE, ANGRY).

<br>

### 006

- Explanation:
<br>This error occurs when your account doesn't have any pages.
<br>

- Solution:
<br>To fix this issue, you need to create a new page from your account, because this is a page method. Otherwise, update your token.

<br>

### 007

- Explanation:
<br>This error occurs because Facebook updates their URL as a unique random string.
<br>

- Solution:
<br>To fix this issue, get the URL on Facebook Lite or in free.facebook.com. The supported URL should be like this:
<br>https://m.facebook.com/story.php?id=100050635086635&story_fbid=982011393496688,
<br>https://www.facebook.com/100050635086635/posts/982011393496688/?substory_index=7544103572345201&app=fbl

<br>

### 008

- Explanation:
<br>This error occurs when you use an invalid Facebook user ID.
<br>

- Solution:
<br>To fix it, you need to extract your actual UID. You can use a third-party app like Facebook bot to extract your UID.

<br><br>





<h3 align="center">AoiSai</h3>

<br>