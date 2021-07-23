const controller = require('@/controller/home');

module.exports = router => {
  router.get('/', controller.index);
};
