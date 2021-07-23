const controller = require('@/controller/weibo');

const PREFIX = '/weibo';

module.exports = router => {
  router.get(`${PREFIX}/hot_spot`, controller.hotSport);
};
