const { getHotSpot } = require('@/service/weibo');
const { generateError, generateSuccess } = require('@/common/utils');

const hotSport = async (ctx, next) => {
  try {
    const result = await getHotSpot();
    ctx.body = generateSuccess(result);
  } catch (err) {
    ctx.body = generateError('获取内容失败');
  }
};

module.exports = {
  hotSport
};