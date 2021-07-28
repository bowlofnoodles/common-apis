require('module-alias/register');

const path = require('path');
const koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');
const koaLogger = require('koa-logger');
const proxyMiddlewares = require('@/middleware/proxy');
const koaStatic = require('koa-static');
const router = require('./src/route');

const app = new koa();

app.use(cors());

app.use(koaStatic(
  path.join(__dirname, './static')
));

proxyMiddlewares.forEach(proxy => {
  app.use(proxy);
});

app.use(koaBody());

app.use(koaLogger());

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env['PORT'] || 627;

app.listen(PORT, () => {
  console.log(`node server started listen on http://127.0.0.1:${PORT}`);
});

module.exports = app;

