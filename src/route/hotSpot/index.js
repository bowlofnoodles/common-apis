const controller = require('@/controller/hotSpot');

module.exports = router => {
  router.get('/hot_spot', controller.index);
};
