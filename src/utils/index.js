const generateError = (message, status = 500) => {
  return {
    status,
    message,
  };
};

const generateSuccess = (data, status = 200) => {
  return {
    status,
    data
  };
};

module.exports = {
  generateError,
  generateSuccess
};
