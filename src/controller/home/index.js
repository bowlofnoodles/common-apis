const index = async (ctx, next) => {
  ctx.body = {
    message: 'hello bowlofnoodles'
  };
};

module.exports = {
  index
};