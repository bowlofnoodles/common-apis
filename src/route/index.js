const koaRouter = require('koa-router');
const homeRoute = require('./home');
const weiboRoute = require('./weibo');

const router = new koaRouter();

homeRoute(router);
weiboRoute(router);

module.exports = router;