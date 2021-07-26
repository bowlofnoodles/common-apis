const { getTopMovie } = require('@/service/douban');
const { generateError, generateSuccess } = require('@/common/utils');

const topMovie = async (ctx, next) => {
  const { start = 0 } = ctx.query;
  try {
    const result = await getTopMovie(start);
    ctx.body = generateSuccess(result);
  } catch (err) {
    ctx.body = generateError('获取内容失败');
  }
};

module.exports = {
  topMovie
};