const koaRouter = require('koa-router');
const homeRoute = require('./home');
const hotSpotRoute = require('./hotSpot');

const router = new koaRouter();

homeRoute(router);
hotSpotRoute(router);

module.exports = router;