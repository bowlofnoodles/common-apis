const koaRouter = require('koa-router');
const homeRoute = require('./home');
const weiboRoute = require('./weibo');
const doubanRoute = require('./douban');

const router = new koaRouter();

homeRoute(router);
weiboRoute(router);
doubanRoute(router);

module.exports = router;