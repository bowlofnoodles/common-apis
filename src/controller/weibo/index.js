const { getHotSpot } = require('@/service/hotSpot');
const { generateError, generateSuccess } = require('@/utils/index');

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