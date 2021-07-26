const controller = require('@/controller/douban');

const PREFIX = '/douban';

module.exports = router => {
  router.get(`${PREFIX}/top_250`, controller.topMovie);
};
