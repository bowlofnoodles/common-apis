const index = async (ctx, next) => {
  ctx.body = {
    message: 'hello, this is bowlofnoodles\'s common apis'
  };
};

module.exports = {
  index
};