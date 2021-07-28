const proxy = require('koa-server-http-proxy');

/**
 * 代理映射地址，路径重写，去除请求路径中的映射前缀
 * [前缀]: [代理服务器地址，前缀替换path]
 * 例如
 * 1. '/music': {
    target: 'http://a.com',
    pathRewrite: { '^/music': '/' },
    changeOrigin: true
  }
 * 会转发为：
 * {host}/music/* -> http://a.com/*
 * 
 * 2. '/api': {
    target: 'http://b.com',
    pathRewrite: { '^/api': '/apis' },
    changeOrigin: true
  }
 * 会转发为：
 * {host}/api/* -> http://b.com/apis/*
 */
const proxyTable = {
  '/music': {
    target: 'https://music-api.bowlofnoodles.top/',
    pathRewrite: { '^/music': '/' },
    changeOrigin: true
  }
};

const proxyMiddlewares = [];
Object.keys(proxyTable).forEach((context) => {
  const options = proxyTable[context];
  proxyMiddlewares.push(proxy(context, options));
});

module.exports = proxyMiddlewares;