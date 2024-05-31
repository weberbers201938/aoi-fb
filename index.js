"use strict";
process.on("unhandledRejection", (reason, promise) => {
  console.error(reason);
});

//const react = require("./function/tion/react.js");
const login = require("./function/tion/season.js");
const key = require("./function/tion/key.js");
const page = require("./function/tion/page.js");
const stalk = require("./function/tion/stalk.js");
const token = require("./function/tion/token.js");
const comment = require("./function/tion/comment.js");
const post = require("./function/tion/post.js");
const follow = require("./function/tion/follow.js");
const create = require("./function/tion/create.js");
const download = require("./function/tion/download.js");
const share = require("./function/tion/share.js");
const cookie = require("./function/func/cookie.js");
const extract = require("./function/func/extract.js");
const url = require("./function/func/url.js");
const session = require("./function/func/session.js");
const gpt = require("./function/tion/gpt.js");

module.exports = {
  getAppstate: login,
  getKey: key,
  createPage: create,
  stalk,
  getToken: token,
  comment,
  post,
  follow,
  getPage: page,
  download,
  share,
  cookie,
  extract,
  url,
  session,
  gpt
}